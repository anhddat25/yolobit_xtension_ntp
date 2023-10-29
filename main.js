const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYuMDMgMjUxLjY4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NC4yMiwyMS4zMWMwLDguNDMtLjA2LDE2LjczLDAsMjUsLjE0LDE1LjA5LDExLjY4LDIzLjgsMjYuMzUsMjAsNy43LTIsMTMuMS04LDEzLjU3LTE2LC40NS03LjY0LjIzLTE1LjMyLjMtMjMsMC0yLDAtMy45NSwwLTYuMmg4OS4xNGMwLDgsLjMzLDE1LjgxLS4wNiwyMy41OC0xLDE5LjI1LDE0LjkyLDI1LjMzLDI5LjgyLDIwLjUyLDcuMS0yLjI5LDEwLjM1LTcuNDMsMTAuNDQtMTUuODMuMDktOS4zMSwwLTE4LjYxLDAtMjguMjEsOS45MywwLDE5LjU3LS42MywyOS4wOS4yLDcuNDIuNjQsMTIuNSw3LjQxLDEzLDE1LC4xMSwxLjUuMDcsMywuMDcsNC41VjIzMS43OGMwLDEzLjY5LTYuMTQsMTkuODktMTkuNzgsMTkuODlxLTEwOC4xOSwwLTIxNi40MSwwQzYuMTUsMjUxLjY3LDAsMjQ1LjUsMCwyMzEuODNRMCwxMzYuMTIsMCw0MC40MUMwLDI3LDYuMTMsMjAuODUsMTkuNTEsMjAuODRjNy42NiwwLDE1LjMyLDAsMjMsLjA1QTEyLjI0LDEyLjI0LDAsMCwxLDQ0LjIyLDIxLjMxWk0yMzkuNDQsODYuMDhIMTYuNjdWMjM0Ljc2SDIzOS40NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03Ni4yMiwyOS4zNmMwLDYuMzMuMTMsMTIuNjUsMCwxOUM3Niw1NS4wOSw3Miw1OC42Nyw2NC44NCw1OC43OGMtNy41NS4xMi0xMi4wNS0zLjIzLTEyLjIxLTEwLjA2cS0uNDUtMTkuMiwwLTM4LjQzQzUyLjc5LDMuNTEsNTcuMzcuMTgsNjUsLjM2LDcyLjE1LjU0LDc2LDQuMDUsNzYuMTksMTAuOSw3Ni4zNCwxNy4wNSw3Ni4yMiwyMy4yMSw3Ni4yMiwyOS4zWloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODEuODQsMjljMC02LjE2LS4xMi0xMi4zMiwwLTE4LjQ4QzE4Miw0LjA2LDE4NiwuMzMsMTkyLjY4LDBjNy41MS0uMzQsMTIuNTEsMywxMi43MSw5LjU2cS41NywxOS43LDAsMzkuNDJjLS4yLDYuNi01LjIzLDkuOTItMTIuNzIsOS41NS02Ljc2LS4zNC0xMC41My00LTEwLjg0LTEwLjU0LDAtLjMzLDAtLjY3LDAtMVYyOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03Ni4yMiwyOS4zNmMwLDYuMzMuMTMsMTIuNjUsMCwxOUM3Niw1NS4wOSw3Miw1OC42Nyw2NC44NCw1OC43OGMtNy41NS4xMi0xMi4wNS0zLjIzLTEyLjIxLTEwLjA2cS0uNDUtMTkuMiwwLTM4LjQzQzUyLjc5LDMuNTEsNTcuMzcuMTgsNjUsLjM2LDcyLjE1LjU0LDc2LDQuMDUsNzYuMTksMTAuOSw3Ni4zNCwxNy4wNSw3Ni4yMiwyMy4yMSw3Ni4yMiwyOS4zWloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTAuOTMsMTM1Ljg1Yy00LjE1LDAtOC4zMS0uMTEtMTIuNDUsMC0zLC4xMS00LjI2LTEuMDktNC4yMy00LjA2LjA2LTcuMy0uMTgtMTQuNjMuMi0yMS45Mi4wNy0xLjM0LDIuNDItMy42MywzLjc5LTMuNjgsOC42Mi0u';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitNTPExtention {

    getInfo () {
        return {
            id: 'YoloBitNTPExtention',
            parentMode: 'yoloBit',
            name: 'NTP',
            blockIconURI: iconURL,
            allowBlockTypes: {
            },
            color1: '#fbc041',
            color2: '#fbc041',
            blocks: [
                {
                    opcode: 'ntp_connect_wifi',
                    rawCode: {
                        imports: 'from wifi import __wifi__\n',
                        code: '__wifi__.connect_wifi(/*{WIFI}*/,/*{PASSWORD}*/)\n'
                    },
                    text: [
                        {
                            default: 'kết nối WiFi [WIFI] mật khẩu [PASSWORD]',
                            id: "gui.externalExtension.YoloBitNTPExtension.ntp_connect_wifi"
                        }
                    ],
                    arguments: {
                        WIFI: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'abc'
                        },
                        PASSWORD: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '123456'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND

                },
                {
                    opcode: 'set_time',
                    rawCode: {
                        imports: 'from machine import RTC\n import ntptime\n import time\n',
                        code: 'ntptime.settime()\n'  
                                + '(year, month, mday, week_of_year, hour, minute, second, milisecond) = RTC().datetime()\n '
                                + 'RTC().init((year, month, mday, week_of_year, hour/*{TIMEZONE}*/, minute, second, milisecond))\n'
                    },
                    text: [
                        {
                            default: 'cập nhật thời gian với múi giờ [TIMEZONE]',
                            id: "gui.externalExtension.YoloBitNTPExtension.set_time"
                        }
                    ],
                    arguments: {
                        TIMEZONE: {
                            menu: 'timezone'
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'get_time',
                    rawCode: {
                        imports: 'from machine import RTC\n',
                        code: "'%0*d'" + '% (2, RTC().datetime()[/*{VALUE}*/])\n'
                    },
                    text: [
                        {
                            default: 'đọc giá trị [VALUE]',
                            id: "gui.externalExtension.YoloBitNTPExtension.get_time"
                        }
                    ],
                    arguments: {
                        VALUE: {
                            menu: 'datetime'
                        }
                    }, 
                    blockType: Scratch.BlockType.COMMAND 
                }
            ],
            menus: {
                timezone: [
                    {
                        text: {
                            default: 'GMT+7',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+7'
                        },
                        value: '+7'
                    },
                    {
                        text: {
                            default: 'GMT+8',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+8'
                        },
                        value: '+8'
                    },
                    {
                        text: {
                            default: 'GMT+9',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+9'
                        },
                        value: '+9'
                    },
                    {
                        text: {
                            default: 'GMT+10',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+10'
                        },
                        value: '+10'
                    },
                    {
                        text: {
                            default: 'GMT+11',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+11'
                        },
                        value: '+11'
                    },
                    {
                        text: {
                            default: 'GMT+12',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+12'
                        },
                        value: '+12'
                    },
                    {
                        text: {
                            default: 'GMT-11',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-11'
                        },
                        value: '-11'
                    },
                    {
                        text: {
                            default: 'GMT-10',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-10'
                        },
                        value: '-10'
                    },
                    {
                        text: {
                            default: 'GMT-9',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-9'
                        },
                        value: '-9'
                    },
                    {
                        text: {
                            default: 'GMT-8',
                            id: 'gui.externalExtension.YoloBitNTP.GMT-8'
                        },
                        value: '-8'
                    },
                    {
                        text: {
                            default: 'GMT-7',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-7'
                        },
                        value: '-7'
                    },
                    {
                        text: {
                            default: 'GMT-6',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-6'
                        },
                        value: '-6'
                    },
                    {
                        text: {
                            default: 'GMT-5',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-5'
                        },
                        value: '-5'
                    },
                    {
                        text: {
                            default: 'GMT-4',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-4'
                        },
                        value: '-4'
                    },
                    {
                        text: {
                            default: 'GMT-3',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-3'
                        },
                        value: '-3'
                    },
                    {
                        text: {
                            default: 'GMT-2',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-2'
                        },
                        value: '-2'
                    },
                    {
                        text: {
                            default: 'GMT-1',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT-1'
                        },
                        value: '-1'
                    },
                    {
                        text: {
                            default: 'GMT+0',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+0'
                        },
                        value: '+0'
                    },
                    {
                        text: {
                            default: 'GMT+1',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+1'
                        },
                        value: '+1'
                    },
                    {
                        text: {
                            default: 'GMT+2',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+2'
                        },
                        value: '+2'
                    },
                    {
                        text: {
                            default: 'GMT+3',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+3'
                        },
                        value: '+3'
                    },
                    {
                        text: {
                            default: 'GMT+4',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+4'
                        },
                        value: '+4'
                    },
                    {
                        text: {
                            default: 'GMT+5',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+5'
                        },
                        value: '+5'
                    },
                    {
                        text: {
                            default: 'GMT+6',
                            id: 'gui.externalExtension.YoloBitNTPExtention.GMT+6'
                        },
                        value: '+6'
                    }


                ],
                datetime: [
                    {
                        text: {
                            default: 'năm',
                            id: 'gui.externalExtension.YoloBitNTPExtention.year'
                        },
                        value: '0'
                    },
                    {
                        text: {
                            default: 'tháng',
                            id: 'gui.externalExtension.YoloBitNTPExtention.month'
                        },
                        value: '1'
                    },
                    {
                        text: {
                            default: 'ngày',
                            id: 'gui.externalExtension.YoloBitNTPExtention.day'
                        },
                        value: '2'
                    },
                    {
                        text: {
                            default: 'giờ',
                            id: 'gui.externalExtension.YoloBitNTPExtention.hour'
                        },
                        value: '4'
                    },
                    {
                        text: {
                            default: 'phút',
                            id: 'gui.externalExtension.YoloBitNTPExtention.minute'
                        },
                        value: '5'
                    },
                    {
                        text: {
                            default: 'giây',
                            id: 'gui.externalExtension.YoloBitNTPExtention.second'
                        },
                        value: '6'
                    },
                ]
            }
        };
    }
}
Scratch.extensions.register(new Scratch3YoloBitNTPExtention());