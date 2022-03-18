#ifndef __IP_HPP__
#define __IP_HPP__

#include <cstdlib>  //uint32_t
#include <cstring>  //strcat
#include <iostream> //sprintf
#include <arpa/inet.h>  //htons, htonl,  etc.

/** \brief Class used to represent a network address
 *
 *  This class is used to represent an IP and provide some basic functions
 *  to interact with it. It is essentially a wrapper around the integer
 *  representation of an IP. No IPv6 support provided.
 */
class Ip
{
public:

    /** \brief Constructor given a string
     *
     *  Construct this class given a string in the format xxx.xxx.xxx.xxx
     *  If the string is not parsable the class is constructed with 127.0.0.1
     *  as IP
     */
    Ip(const char* ip);

    /** \brief Constructor given an integer
     *
     *  Construct this class given an integer representing the IP in network
     *  order
     */
    Ip(uint32_t network_ordered);

    /** \brief Default constructor
     *
     *  Set this IP to 127.0.0.1
     */
    Ip();

    ///Default destructor
    ~Ip() = default;

    /** \brief Return the IP as integer
     *
     *  Return an integer representing the IP in network order
     *  \sa getIpHo();
     */
    uint32_t getIp()const;

    /** \brief Return the IP as integer
     *
     *  Return an integer representing the IP in host order
     *  \sa getIp();
     */
    uint32_t getIpHo()const;

    /** \brief Return a string representing the IP
     *
     *  The string is a null-terminated C-string and must be at least 22 chars
     *  long.
     *
     *  \param[out] output The array where the IP will be written
     */
    void toString(char output[22])const;

    ///True if the IP is 127.0.0.1
    bool isLocalhost()const;

    ///True if the IP is from a Private Network
    bool isPrivate()const;

    ///True if the IP is equal to the one passed as input
    bool operator==(const Ip&)const;
    ///True if the IP is different from the one passed as input
    bool operator!=(const Ip&)const;

private:

    uint32_t ip_no;

};

///Localhost in network order
extern const uint32_t _LOCALHOST_NO_;

#endif
