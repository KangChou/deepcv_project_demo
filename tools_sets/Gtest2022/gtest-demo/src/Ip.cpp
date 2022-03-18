#include "Ip.hpp"

static uint32_t determineLocalhost()
{
    struct sockaddr_in sa;
    inet_pton(AF_INET,"127.0.0.1",&(sa.sin_addr));
    return sa.sin_addr.s_addr;
}

//this is super ugly, but constexpr doesn't work with inet_pton and I don't
//want to pollute the class with a simple constant
const uint32_t _LOCALHOST_NO_ = determineLocalhost();

Ip::Ip(const char* ip)
{
    struct sockaddr_in sa;
    if(strcmp(ip,"localhost")!=0)
    {
        if(inet_pton(AF_INET, ip, &(sa.sin_addr)))
        {
            Ip::ip_no = sa.sin_addr.s_addr;
            return;
        }
    }
    //default case
    inet_pton(AF_INET, "127.0.0.1", &(sa.sin_addr));
    Ip::ip_no = sa.sin_addr.s_addr;
}

Ip::Ip(uint32_t ip_network_ordered)
{
    Ip::ip_no = ip_network_ordered;
}

Ip::Ip()
{
    Ip::ip_no = _LOCALHOST_NO_;
}

uint32_t Ip::getIp() const
{
    return Ip::ip_no;
}

uint32_t Ip::getIpHo() const
{
    return ntohl(Ip::ip_no);
}

bool Ip::isLocalhost()const
{
    return Ip::ip_no == _LOCALHOST_NO_;
}

void Ip::toString(char output[22]) const
{
    struct sockaddr_in sa;
    sa.sin_addr.s_addr = ip_no;
    inet_ntop(AF_INET, &(sa.sin_addr), output, INET_ADDRSTRLEN);
}

bool Ip::operator==(const Ip& a)const
{
    return Ip::ip_no == a.ip_no;
}

bool Ip::operator!=(const Ip& a)const
{
    return !(*(this)==a);
}

bool Ip::isPrivate()const
{
    uint32_t ip = ntohl(Ip::ip_no);

    uint8_t q1 = (ip & 0xFF000000) >> 24;
    if(q1 == 10 || q1 == 127)
        return true;
    else
    {
        uint8_t q2 = (ip & 0x00FF0000) >> 16;
        if((q1 == 172 && q2 > 15 && q2 < 32) || (q1 == 192 && q2 == 168) ||
           (q1 == 169 && q2 == 254))
            return true;
        else
            return false;
    }
}
