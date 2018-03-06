import tabula


path = "/Users/timdo/Downloads/Daily_Statement_ENG_273896.pdf"
df = tabula.read_pdf(path)
df.columns = ['Name', 
              'Code',
              'Expiry',
              'Quantity',
              'Market Price',
              'Total Value',
              'CCY',
              'UnrealizedPL',
              'Margin',
              'Financing Cost']

df = df.iloc[2:len(df['Total Value'])-1,:]

def file_output(data):
    f = open('helloworld.txt','w')
    f.write(data)
    f.close()
    
def file_input(data):
    f = open('helloworld.txt','r')
    message = f.read()
    print(message)
    f.close()
    
def file_append(data):
    f = open('helloworld.txt','a')
    f.write('\n' + data)
    f.close()

def get_stock_code(data):
    data = data['Code'].str.split('.').tolist()
    stockCode = []
    for i in range(len(data)):
        stockCode.append(data[i][0])
    return stockCode
    

stockCode = get_stock_code(df)
file_output(str(stockCode))


#===================== Send email ============================
#send email through outlook
import win32com.client as win32
import psutil
import os
import subprocess
 
# Drafting and sending email notification to senders. You can add other senders' email in the list
def send_notification():
    outlook = win32.Dispatch('outlook.application')
    mail = outlook.CreateItem(0)
    mail.To = 'tiendq83@gmail.com; timado83@gmail.com', 
    mail.Subject = 'Sent through Python'
    mail.body = 'This email alert is auto generated. Please do not respond.'
    mail.send
     
# Open Outlook.exe. Path may vary according to system config
# Please check the path to .exe file and update below
     
def open_outlook():
    try:
        subprocess.call(['C:\Program Files\Microsoft Office\Office15\Outlook.exe'])
        os.system("C:\Program Files\Microsoft Office\Office15\Outlook.exe");
    except:
        print("Outlook didn't open successfully")
 
# Checking if outlook is already opened. If not, open Outlook.exe and send email
for item in psutil.pids():
    p = psutil.Process(item)
    if p.name() == "OUTLOOK.EXE":
        flag = 1
        break
    else:
        flag = 0
 
if (flag == 1):
    send_notification()
else:
    open_outlook()
    send_notification()

