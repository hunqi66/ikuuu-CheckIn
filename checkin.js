import requests
import re
import json
import time
import os
import sys
def iIiii1i111i1I ( ) :
 if os . environ . get ( "ikid" ) :
  iii = os . environ [ "ikid" ]
  print ( "已获取用户名" + " " + iii )
  return iii
 else :
  print ( "获取账号失败，请export ikid='1580434403@qq.com'" )
i111IiI1Iii1I = iIiii1i111i1I ( )
def OoOo ( ) :
 if os . environ . get ( "ikpw" ) :
  III = os . environ [ "ikpw" ]
  oO0oOo0O00O0o = len ( III )
  iiIiiiIII1Ii = list ( III )
  O0O00 = oO0oOo0O00O0o - 1
  i1iiIII111 = iiIiiiIII1Ii [ 0 ] + "****" + iiIiiiIII1Ii [ O0O00 ]
  print ( "已获取密码" + " " + i1iiIII111 )
  return III
 else :
  print ( "获取密码失败，请export ikpw='24681000'" )
Ii = OoOo ( )
IIii11Ii = requests . session ( )
OOoOoo000O00 = {
 "email" : i111IiI1Iii1I ,
 "passwd" : Ii
 }
Ooo0Ooo = "https://ikuuu.ltd/auth/login"
IIii11Ii . post ( Ooo0Ooo , data = OOoOoo000O00 )
ii1I1iII1I1I = IIii11Ii . post ( 'https://ikuuu.ltd/user/checkin' )
i1I1IiIIiIi1 = ii1I1iII1I1I . content . decode ( 'unicode_escape' )
oo0O000ooO = re . compile ( r'"msg":"(?P<name>.*?)"' , re . S )
iIIiiIIiii1 = oo0O000ooO . finditer ( i1I1IiIIiIi1 )
i111IiI1Iii1I = [ ]
for iIi1ii1I1iI11 in iIIiiIIiii1 :
 print ( iIi1ii1I1iI11 . group ( "name" ) )
 i111IiI1Iii1I . append ( iIi1ii1I1iI11 . group ( "name" ) )
if i111IiI1Iii1I == [ ] :
 print ( "账号或密码错误，请检查" )
 if 55 - 55: I11II1Ii % iIi
