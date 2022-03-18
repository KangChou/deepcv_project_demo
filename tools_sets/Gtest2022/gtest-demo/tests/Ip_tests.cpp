#include "Ip.hpp"
#define XCTEST



#include <gtest/gtest.h>







TEST(Ip,creationEmpty)
{
    Ip a;
    EXPECT_EQ(a.getIp(), htonl(0x7F000001));
}

TEST(Ip,creationGivenNetworkOrdered)
{
    int i1 = 0x64839504;
    int i2 = 0x84759354;
    int i3 = 0x74868658;
    int i4 = 0x01930458;
    Ip a(i1);
    Ip b(i2);
    Ip c(i3);
    Ip d(i4);
    EXPECT_EQ(a.getIp(), i1);
    EXPECT_EQ(b.getIp(), i2);
    EXPECT_EQ(c.getIp(), i3);
    EXPECT_EQ(d.getIp(), i4);
    EXPECT_EQ(a.getIpHo(),ntohl(i1));
    EXPECT_EQ(b.getIpHo(),ntohl(i2));
    EXPECT_EQ(c.getIpHo(),ntohl(i3));
    EXPECT_EQ(d.getIpHo(),ntohl(i4));
}

TEST(Ip,creationGivenString)
{
    Ip i0("63.5.206.146");
    Ip i1("252.172.36.85");
    Ip i2("82.242.64.51");
    Ip i3("246.37.169.25");
    Ip i4("223.152.98.234");
    Ip i5("119.73.91.82");
    Ip i6("27.47.156.76");
    Ip i7("11.164.147.119");
    Ip i8("192.36.70.144");
    Ip i9("67.169.13.16");

    EXPECT_EQ(i0.getIp(),htonl(0x3F05CE92));
    EXPECT_EQ(i1.getIp(),htonl(0xFCAC2455));
    EXPECT_EQ(i2.getIp(),htonl(0x52F24033));
    EXPECT_EQ(i3.getIp(),htonl(0xF625A919));
    EXPECT_EQ(i4.getIp(),htonl(0xDF9862EA));
    EXPECT_EQ(i5.getIp(),htonl(0x77495B52));
    EXPECT_EQ(i6.getIp(),htonl(0x1B2F9C4C));
    EXPECT_EQ(i7.getIp(),htonl(0x0BA49377));
    EXPECT_EQ(i8.getIp(),htonl(0xC0244690));
    EXPECT_EQ(i9.getIp(),htonl(0x43A90D10));
}

TEST(Ip,Localhost)
{
    Ip a;
    Ip b("127.0.0.1");
    Ip c("localhost");

    EXPECT_EQ(a.getIp(), htonl(0x7F000001));
    EXPECT_EQ(b.getIp(), htonl(0x7F000001));
    EXPECT_EQ(c.getIp(), htonl(0x7F000001));
}

TEST(Ip,LocalhostFunctionChecking)
{
    Ip a;
    Ip b("127.0.0.1");
    Ip c("localhost");
    Ip d("10.194.245.3");

    EXPECT_TRUE(a.isLocalhost());
    EXPECT_TRUE(b.isLocalhost());
    EXPECT_TRUE(c.isLocalhost());
    EXPECT_FALSE(d.isLocalhost());
}

TEST(Ip,assignOperator)
{
    Ip a;
    Ip b("10.194.30.240");

    a = b;
    EXPECT_EQ(a.getIp(), b.getIp());
}

TEST(Ip,equalOperator)
{
    Ip a;
    Ip b("localhost");
    Ip c("10.145.34.93");

    EXPECT_TRUE(a == b);
    EXPECT_FALSE(a == c);
}

TEST(Ip,notEqualOperator)
{
    Ip a;
    Ip b("localhost");
    Ip c("10.145.34.93");

    EXPECT_TRUE(a != c);
    EXPECT_FALSE(a != b);
}

TEST(Ip,toStringOperator)
{
    Ip a;
    char s[] = "10.194.255.255";
    Ip b(s);

    char ip1[16],ip2[16];

    a.toString(ip1);
    b.toString(ip2);

    EXPECT_EQ(strcmp(ip1,"127.0.0.1"), 0);
    EXPECT_EQ(strcmp(ip2,s), 0);
}

TEST(Ip,isPrivate)
{
    Ip i1("127.0.0.1");
    Ip i2("10.0.0.10");
    Ip i3("10.255.255.255");
    Ip i4("192.168.0.2");
    Ip i5("192.168.1.2");
    Ip i6("192.167.1.2");
    Ip i7("172.16.10.4");
    Ip i8("171.16.10.4");
    Ip i9("169.254.3.3");
    Ip i10("169.255.3.3");
    Ip i11("8.8.8.8");
    Ip i12("8.8.4.4");
    Ip i13("126.0.0.1");
    Ip i14("72.41.253.84");
    Ip i15("172.15.10.4");
    Ip i16("172.31.10.4");
    Ip i17("172.32.10.4");

    EXPECT_TRUE(i1.isPrivate());
    EXPECT_TRUE(i2.isPrivate());
    EXPECT_TRUE(i3.isPrivate());
    EXPECT_TRUE(i4.isPrivate());
    EXPECT_TRUE(i5.isPrivate());
    EXPECT_FALSE(i6.isPrivate());
    EXPECT_TRUE(i7.isPrivate());
    EXPECT_FALSE(i8.isPrivate());
    EXPECT_TRUE(i9.isPrivate());
    EXPECT_FALSE(i10.isPrivate());
    EXPECT_FALSE(i11.isPrivate());
    EXPECT_FALSE(i12.isPrivate());
    EXPECT_FALSE(i13.isPrivate());
    EXPECT_FALSE(i14.isPrivate());
    EXPECT_FALSE(i15.isPrivate());
    EXPECT_TRUE(i16.isPrivate());
    EXPECT_FALSE(i17.isPrivate());
}
