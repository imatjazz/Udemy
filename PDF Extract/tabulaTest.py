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

