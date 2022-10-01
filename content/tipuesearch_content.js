var tipuesearch = {"pages": [{'title': '公佈欄', 'text': 'w4 開始, 各班先進教室的學員, 可以往前面自己選電腦位置上課,  不再按照學號固定座位 . \n \n 大二學制以上同學要取得 @nfu.edu.tw 電子郵箱登記的 Onedrive 帳號管理步驟: \n \n 由於學校已經統一幫全校師生以 @nfu.edu.tw 電子郵箱登記 Microsoft 教育帳號, 因此大二以上同學 無需新建帳號, 而是取得該帳號的管理權 . \n 先從  https://mail.nfu.edu.tw , 以學號與密碼登入 @nfu.edu.tw mail 2000 電子郵箱. \n 直接在  Onedrive 登入 畫面, 以"學號@nfu.edu.tw"輸入作為登入帳號, 點選下一步後, 若出現"忘記密碼"選項, 表示帳號已經建立, 此時點選"忘記密碼", 系統就會寄出修改密碼的連結至"學號@nfu.edu.tw"電子郵箱. \n 從上列已經登入的電子郵箱, 修改登入 Onedrive 系統的帳號對應密碼. \n 之後利用"學號@nfu.edu.tw" 登入  Onedrive , 以下列 Teams codes, 就可以分別進入課程教室. \n \n \n 只要登入 @nfu.edu.tw 對應的 Teams 帳號, 就可以進以下教室: \n cp2022 Teams code: xry4zv3 (計算機程式) \n cad2022 Teams code: dyw3r9h (電腦輔助設計實習) \n \n 為了簡化各學員建立課程倉儲與網站的流程, 2022 Fall 起採用  Github Classroom  管理學員倉儲. \n 為了配合疫情需求, 2022 Fall w3 起上課將採用  Microsoft Teams  以 Meet 上課. 各學員若無法實體赴校上課, 可以直接就地線上參與課程. \n \n OnShape 上的 fosball table: \n https://cad.onshape.com/documents/f30f0cd8b9dc8ca3ed4382c3/w/0a449a9e4794341cffde87a0/e/11ea0a6fd5b89099e65452f1 \n \n 2022 Fall 計算機程式 - classroom \n 1b:\xa0 https://ethercalc.net/ll5ki4lsoabr \xa0 \n 登入 github 帳號後連結至: \n https://classroom.github.com/a/Bu2JQVow \n 2022 Fall 電腦輔助設計與實習-classroom \n 登入 github 帳號後連結至:\xa0 https://classroom.github.com/a/ivEMxuXH \xa0 \n 登記 github 帳號:  https://ethercalc.net/9l4hsui6jkj7 \n 目前可從  https://mde.tw/studlist/2022fall/2a.txt  讀出已經填入資料的學員帳號 \n 若資料有異動, 可以從  https://github.com/mdecycu/studlist  以  Pull Requests  ( 教學 ) 要求修改. \n 取得 site-Github_帳號 倉儲管理權限 \n \n \n \n \n Please enable JavaScript to view the  comments powered by Disqus. \n', 'tags': '', 'url': '公佈欄.html'}, {'title': 'TCExam', 'text': 'nginx 只允許特定 IPv6 網段連線, 且將 http 用戶跳轉至 https 設定: \n     server {\n        listen       [::]:80 default ipv6only=on;\n        server_name  domain.cycu.org;\n        #return       301 https://$server_name$request_uri;\n        \n        allow 2001:288:6004:xx::0/32;\n        deny all;\n\t\n\treturn 302 https://domain.cycu.org;\n        \n        #location /{\n            #root C:/tcexam/downloads;\n            #auth_basic "For Authorized Users Only!";\n            #auth_basic_user_file C:/tcexam/nginx-1.20.1/.htpasswd;\n        #}\n    } \n nginx 執行 php 解譯設定: \n server { \n    listen    [::]:443 default ssl ipv6only=on;\n    \n    root C:/tcexam_dir/tcexam;\n\n    server_name    domain.cycu.org;\n    ssl_certificate    C:/tcexam_dir/fullchain.pem;\n    ssl_certificate_key    C:/tcexam_dir/privkey.pem;\n    ssl_protocols    TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers    HIGH:!aNULL:!MD5;\n    \n    allow 2001:288:6004:xx::0/32;\n    deny all;\n    \n    location /{ \n        index index.html index.php;\n    }\n    \n    location ~ \\.php$ {\n        fastcgi_pass   127.0.0.1:9123;\n        fastcgi_index  index.php;\n        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;\n        include        fastcgi_params;\n    }\n} \n fastcgi 在 port 9123 啟動的 batch file: \n @ECHO OFF\nECHO Starting PHP FastCGI...\nset PATH=C:\\PHP8.1.7;%PATH%\nc:\\PHP8.1.7\\RunHiddenConsole.exe C:\\PHP8.1.7\\php-cgi.exe -b 127.0.0.1:9123 \n 若採用 nssm 建立服務, 則透過下列設定建立: \n nssm install php 建立 php 服務. \n nssm edit php 則用來編輯服務. \n Path: C:\\tcexam_dir\\php8.1.7\\php-cgi.exe\n\nStartup Directory: C:\\tcexam_dir\\php8.1.7\n\nArguments: -b 127.0.0.1:9123 \n \n \n', 'tags': '', 'url': 'TCExam.html'}, {'title': '雲端與近端', 'text': '雲端版工具: \n 分散式版次管理系統:\xa0 - 登入   github  (靜態網站) \xa0 \n 雲端整合程式開發環境: - 登入\xa0 replit  (雲端動態網站) \xa0 \n 電子郵件系統: - 登入  https://mail.nfu.edu.tw   (學號@nfu.edu.tw) , 採用 mail200 轉信至  Gmail \n 雲端硬碟 - 登入  Onedrive  (需要 5TB 儲存資料,  Teams  與  Meet  上課) \xa0 \n 雲端教室 - MS  Teams  (教學影片與課程教材) 與  Github Classroom  (學員倉儲與網站) \n 雲端 MCAD: - 登入\xa0 Onshape  (可以在平板與手機上繪製或檢視零組件) \xa0 \n 繪製流程圖:  https://app.diagrams.net/   \n \n 近端版工具: \n Siemens  NX 2027  (高階 MCAD) \xa0 \n Solvespace 3.0  (有原始碼的參數式繪圖軟體) \xa0 \n CoppeliaSim 4.3.0  (機電資系統模擬軟體) \n 可攜 Python  3.10.6 \n 可攜 MSYS2 \n PC, Notebook , Servers (Windows 10, Windows Server 2022, Ubuntu 20.04, 22.04) \n \xa0 \n', 'tags': '', 'url': '雲端與近端.html'}, {'title': 'cp2022', 'text': '1a 計算機程式修課學員名單  (取自教務主機) \n 1b 計算機程式修課學員名單 \xa0 (取自教務主機) \n \n 1a 學號與 Github 帳號對照表 \n 1b 學號與 Github 帳號對照表 \n \n \n https://github.com/Shohrab-Hossain/Tic-Tac-Toe-web \n https://github.com/chfw/brython-pack \n 利用下列網際程式架構, 可以設法取出教務主機所有公開資料. \n 擷取學員名單程式碼: \n from flask import Flask, request \nfrom flask_cors import CORS\n  \nimport requests\nimport bs4\n#import ssl\n  \n\'\'\'\n1a - 2b\n?semester=1111&courseno=0747&column=True \n\n?semester=1111&courseno=0761&column=True \n\n?semester=1111&courseno=0773&column=True \n\n?semester=1111&courseno=0786&column=True \n\'\'\'\n\napp = Flask(__name__)\nCORS(app)\n  \n@app.route(\'/studlist\')\n@app.route(\'/\')\ndef studlist():\n    semester = request.args.get(\'semester\')\n    courseno = request.args.get(\'courseno\')\n    column = request.args.get(\'column\')\n\n    if semester == None:\n        semester = \'1091\'\n    if courseno == None:\n        courseno = \'0762\'\n    \n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\n    url = \'https://qry.nfu.edu.tw/studlist_ajax.php\'\n    post_var = {\'pselyr\': semester, \'pseqno\': courseno}\n  \n    result = requests.post(url, data = post_var, headers = headers)\n    soup = bs4.BeautifulSoup(result.content, \'lxml\')\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n    data = []\n    rows = table.find_all(\'tr\')\n    for row in rows:\n        cols = row.find_all(\'td\')\n        cols = [ele.text.strip() for ele in cols]\n        data.append([ele for ele in cols if ele]) # Get rid of empty values\n    output = ""\n    for i in data[2:]:\n        if column == "True":\n            output +=i[0] + "</br>"\n        else:\n            output +=i[0] + "\\n"\n        \n    return output\n  \n# 即使在近端仍希望以 https 模式下執行\n#context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)\n#context.load_cert_chain(\'localhost.crt\', \'localhost.key\')\n  \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True) \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'cp 抽點', 'text': '# Python 的註解分為單行註解與多行, 單行註解可在字串前方放入 #\n\'\'\'多行註解則可以透過三個單引號前後標註字串或文字段落內容, \n也可以使用三個雙引號作為多行註解的標註\n\'\'\'\n# 使用 import 導入 random 模組, 隨後就可以直接引用 random 模組的方法\nimport random\ncp1a = "0747"\n# 宣告 url 變數值為字串, 此字串為取得 cp2022 1a 選課成員名單\nurl = "https://nfu.cycu.org/?semester=1111&courseno=" + cp1a + "&column=True"\n# 利用上述已經宣告的 url 變數字串值, 作為 open() 函式的輸入變數, 可以連結至該網站\n# 連接 url 所代表字串的網站後, 再利用 read() 函式讀取該網站的內容, 即可取得 cp2022 1a 的選課成員學號\n# url 所屬的網站, 乃 69 中的一台虛擬主機 8/10ff-0-1-2, 並利用 Get 從教務主機取回課程註冊成員學號\n# 由於所取回的學號以跳行符號隔開, 因此取回的學號資料行, 再利用 split() 函式, 以 \\n 跳行符號分割後\n# 所對應到 data 的資料型別將會是數列\ndata = open(url).read().split("\\n")\n# 經過檢查 data 數列, 發現最後一個 element 為空字串, 因此利用 [:-1] 去掉數列的最後一個元素, -1 代表數列最後一個元素的索引\n#print(data[:-1])\n# 設定一個變數, 與修課成員學號數列對應\nstud = data[:-1]\n# 使用 random 模組中的 shuffle() 函式, 以隨機的方式排列 stud 數列內容\nrandom.shuffle(stud)\n# 設定 num 與 5 對應, 或將 5 整數值存入 num 變數所對應的記憶體位址\nnum = 5\n# 利用 for 重複迴圈與 range() 變數, 列印出 (利用 print() 函式) 已經隨機排列次序的 stud 數列的最前面 num 個學號值\nfor i in range(num):\n    print(stud[i]) \n 因為  https://nfu.cycu.org/?semester=1111&courseno=0747&column=True  並沒有公開登錄其述網站的數位簽章, 所以在執行以下抽點之前要先執行上述連結. \n cp a 抽點 \n cp b 抽點', 'tags': '', 'url': 'cp 抽點.html'}, {'title': 'cad2022', 'text': '2a 電腦輔助設計與實習修課學員名單 \xa0 (取自教務主機) \n 2b 電腦輔助設計與實習修課學員名單 \xa0 (取自教務主機) \n \n 2a 學號與 Github 帳號對照表 \n 2b 學號與 Github 帳號對照表 \n \n \n 擷取學員名單程式碼: \n from flask import Flask, request \nfrom flask_cors import CORS\n  \nimport requests\nimport bs4\n#import ssl\n  \n\'\'\'\n1a - 2b\n?semester=1111&courseno=0747&column=True \n\n?semester=1111&courseno=0761&column=True \n\n?semester=1111&courseno=0773&column=True \n\n?semester=1111&courseno=0786&column=True \n\'\'\'\n\napp = Flask(__name__)\nCORS(app)\n  \n@app.route(\'/studlist\')\n@app.route(\'/\')\ndef studlist():\n    semester = request.args.get(\'semester\')\n    courseno = request.args.get(\'courseno\')\n    column = request.args.get(\'column\')\n\n    if semester == None:\n        semester = \'1091\'\n    if courseno == None:\n        courseno = \'0762\'\n    \n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\n    url = \'https://qry.nfu.edu.tw/studlist_ajax.php\'\n    post_var = {\'pselyr\': semester, \'pseqno\': courseno}\n  \n    result = requests.post(url, data = post_var, headers = headers)\n    soup = bs4.BeautifulSoup(result.content, \'lxml\')\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n    data = []\n    rows = table.find_all(\'tr\')\n    for row in rows:\n        cols = row.find_all(\'td\')\n        cols = [ele.text.strip() for ele in cols]\n        data.append([ele for ele in cols if ele]) # Get rid of empty values\n    output = ""\n    for i in data[2:]:\n        if column == "True":\n            output +=i[0] + "</br>"\n        else:\n            output +=i[0] + "\\n"\n        \n    return output\n  \n# 即使在近端仍希望以 https 模式下執行\n#context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)\n#context.load_cert_chain(\'localhost.crt\', \'localhost.key\')\n  \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True) \n', 'tags': '', 'url': 'cad2022.html'}, {'title': 'cad 抽點', 'text': '# Python 的註解分為單行註解與多行, 單行註解可在字串前方放入 #\n\'\'\'多行註解則可以透過三個單引號前後標註字串或文字段落內容, \n也可以使用三個雙引號作為多行註解的標註\n\'\'\'\n# 使用 import 導入 random 模組, 隨後就可以直接引用 random 模組的方法\nimport random\ncad2a = "0773"\n# 宣告 url 變數值為字串, 此字串為取得 cp2022 1a 選課成員名單\nurl = "https://nfu.cycu.org/?semester=1111&courseno=" + cad2a + "&column=True"\n# 利用上述已經宣告的 url 變數字串值, 作為 open() 函式的輸入變數, 可以連結至該網站\n# 連接 url 所代表字串的網站後, 再利用 read() 函式讀取該網站的內容, 即可取得 cp2022 1a 的選課成員學號\n# url 所屬的網站, 乃 69 中的一台虛擬主機 8/10ff-0-1-2, 並利用 Get 從教務主機取回課程註冊成員學號\n# 由於所取回的學號以跳行符號隔開, 因此取回的學號資料行, 再利用 split() 函式, 以 \\n 跳行符號分割後\n# 所對應到 data 的資料型別將會是數列\ndata = open(url).read().split("\\n")\n# 經過檢查 data 數列, 發現最後一個 element 為空字串, 因此利用 [:-1] 去掉數列的最後一個元素, -1 代表數列最後一個元素的索引\n#print(data[:-1])\n# 設定一個變數, 與修課成員學號數列對應\nstud = data[:-1]\n# 使用 random 模組中的 shuffle() 函式, 以隨機的方式排列 stud 數列內容\nrandom.shuffle(stud)\n# 設定 num 與 5 對應, 或將 5 整數值存入 num 變數所對應的記憶體位址\nnum = 5\n# 利用 for 重複迴圈與 range() 變數, 列印出 (利用 print() 函式) 已經隨機排列次序的 stud 數列的最前面 num 個學號值\nfor i in range(num):\n    print(stud[i]) \n 因為  https://nfu.cycu.org/?semester=1111&courseno=0747&column=True  並沒有公開登錄其述網站的數位簽章, 所以在執行以下抽點之前要先執行上述連結. \n cad a 抽點 \n cad b 抽點', 'tags': '', 'url': 'cad 抽點.html'}, {'title': 'Control', 'text': 'https://github.com/sooryamsharma/Hand-Gesture-Controlled-Drone \n', 'tags': '', 'url': 'Control.html'}, {'title': 'About', 'text': "這裡是  https://mde.tw  課程教學的 replit 線上動態網站, 主要用來公布與上課進度有關的短暫訊息內容, 通常只有在上課時段才會開啟. \n wcms for mde.tw on replit \n https://cycu.org  - Chiaming Yen's Cyber Universe \n \n RoboDK: \n https://github.com/RoboDK \n https://github.com/topics/robodk \n https://robodk.com/downloads/Install-RoboDK-64-v5.2.2.exe \n https://robodk.com/downloads/Install-RoboDK-64-v5.5.1.exe \n \n 先前課程相關影片 \n", 'tags': '', 'url': 'About.html'}, {'title': 'nfulist', 'text': 'import requests\nimport bs4\n\nproxies = {\n        \'http\': \'http://[2001:288:6004:17::xx]:3128\',\n        \'https\': \'http://[2001:288:6004:17::xx]:3128\'\n        }\n\nsemester = \'1091\'\ncourseno = \'0762\'\ncolumn = True\n\nheaders = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\nurl = \'https://qry.nfu.edu.tw/studlist_ajax.php\'\npost_var = {\'pselyr\': semester, \'pseqno\': courseno}\n\n# need to executed through proxy server\nresult = requests.post(url, data = post_var, headers = headers, proxies=proxies)\n\nsoup = bs4.BeautifulSoup(result.content, \'lxml\')\ntable = soup.find(\'table\', {\'class\': \'tbcls\'})\ndata = []\nrows = table.find_all(\'tr\')\nfor row in rows:\n    cols = row.find_all(\'td\')\n    cols = [ele.text.strip() for ele in cols]\n    data.append([ele for ele in cols if ele]) # Get rid of empty values\noutput = ""\nfor i in data[2:]:\n    #print(i[0])\n    if column == "True":\n        output +=i[0] + "</br>"\n    else:\n        output +=i[0] + "\\n"\n\nprint(output) \n Web based: \n # 以 Flask 作為網際框架, \nfrom flask import Flask, request\n# 允許跨網站擷取資料\nfrom flask_cors import CORS\n\n# 利用 requests 取回網站中的頁面資料\nimport requests\n# 利用 beautifulsoup 解讀超文件網頁內容\nimport bs4\n# 若在近端啟動也要採用 SSL 時導入\n#import ssl\n  \n\'\'\'\n2022 Fall 各班課程代號\n1a - 2b\n?semester=1111&courseno=0747&column=True \n\n?semester=1111&courseno=0761&column=True \n\n?semester=1111&courseno=0773&column=True \n\n?semester=1111&courseno=0786&column=True \n\n\'\'\'\nproxies ={\n\'http\': \'http://account:password@[2001:288:6004:17::4]:3128\',\n\'https\': \'http://account:password@[2001:288:6004:17::4]:3128\'\n}\n\napp = Flask(__name__)\nCORS(app)\n  \n@app.route(\'/studlist\')\n@app.route(\'/\')\ndef studlist():\n    semester = request.args.get(\'semester\')\n    courseno = request.args.get(\'courseno\')\n    column = request.args.get(\'column\')\n\n    if semester == None:\n        semester = \'1091\'\n    if courseno == None:\n        courseno = \'0762\'\n    \n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n\n    url = \'https://qry.nfu.edu.tw/studlist_ajax.php\'\n    post_var = {\'pselyr\': semester, \'pseqno\': courseno}\n    \n    # 可透過 Proxy server 執行程式\n    #result = requests.post(url, data = post_var, headers = headers, proxies = proxies)\n    result = requests.post(url, data = post_var, headers = headers)\n    soup = bs4.BeautifulSoup(result.content, \'lxml\')\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n    data = []\n    rows = table.find_all(\'tr\')\n    for row in rows:\n        cols = row.find_all(\'td\')\n        cols = [ele.text.strip() for ele in cols]\n        data.append([ele for ele in cols if ele]) # Get rid of empty values\n    output = ""\n    for i in data[2:]:\n        #print(i[0])\n        if column == "True":\n            output +=i[0] + "</br>"\n        else:\n            output +=i[0] + "\\n"\n        \n    return output\n    #return  str(pselyr) + " + " +str(pseqno)\n  \n# 即使在近端仍希望以 https 模式下執行\n#context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)\n#context.load_cert_chain(\'localhost.crt\', \'localhost.key\')\n  \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True) \n \n', 'tags': '', 'url': 'nfulist.html'}, {'title': 'Onedrive', 'text': '之後上課的認證 email address 都將使用 @nfu.edu.tw, 大二以上的 @gm 帳號僅當作備用帳號. \n 若兩個信箱都至  https://www.microsoft.com/zh-tw/education/products/office  註冊, 將可各取得 5TB 的雲端儲存空間. \n', 'tags': '', 'url': 'Onedrive.html'}, {'title': 'USB drive', 'text': "最簡單的作法: Select  Start  \xa0>  Settings  \xa0>  Devices . Select the device, and select\xa0 Remove device . \n Safely remove USB dirve \n Windows 10: \n \n \n \n Look for the  Safely Remove Hardware  icon on the taskbar. If you don't see it, select\xa0 Show hidden icons  . Press and hold (or right-click) the icon and select the hardware you want to remove. \n \n \n If you can't find the  Safely Remove Hardware  icon, press and hold (or right-click) the taskbar and select  Taskbar settings  . \n \n \n Under  Notification Area , choose  Select which icons appear on the taskbar . \n \n \n Scroll to  Windows Explorer: Safely Remove Hardware and Eject Media  and turn it on. \n \n \n If this doesn't work, make sure the device has stopped all activity like copying or syncing files.\xa0Select  Start  \xa0>  Settings  \xa0>  Devices . Select the device, and select\xa0 Remove device . \n \n \n Finally, check with the hardware manufacturer for new drivers or other updates. \n \n \n Windows 11: \n \n \n \n Look for the  Safely Remove Hardware  icon on the taskbar. If you don't see it, select\xa0 Show hidden icons  . Press and hold (or right-click) the icon and select the hardware you want to remove. \n \n \n If you can't find the  Safely Remove Hardware  icon, press and hold (or right-click) the taskbar and select  Taskbar settings  . \n \n \n Select  Taskbar corner overflow \xa0to expand it. Scroll to  Windows Explorer  (when you hover over it, the tooltip will read  Safely Remove Hardware and Eject Media ) and turn it on. \n \n \n If this doesn't work, make sure the device has stopped all activity like copying or syncing files.\xa0Select  Start  \xa0>  Settings  \xa0>  Bluetooth & devices  \xa0>  Devices  . \n \n \n Select  More   next to the device, and select  Remove device . \n \n \n Finally, check with the hardware manufacturer for new drivers or other updates. \n \n \n", 'tags': '', 'url': 'USB drive.html'}, {'title': 'mde', 'text': 'https://web.archive.org/web/19981202031321/http://www.mde.nhit.edu.tw/  ', 'tags': '', 'url': 'mde.html'}, {'title': 'TCExam_error', 'text': 'ATTENTION: [8192] htmlspecialchars(): Passing null to parameter #1 ($string) of type string is deprecated | LINE: 793 | FILE: C:\\tcexam\\tcexam\\admin\\code\\tce_edit_answer.php \n ATTENTION: [8192] Implicit conversion from float 11.5 to int loses precision | LINE: 639 | FILE: C:\\tcexam\\tcexam\\shared\\code\\tce_functions_test_stats.php \n ATTENTION: [8192] htmlspecialchars(): Passing null to parameter #1 ($string) of type string is deprecated | LINE: 383 | FILE: C:\\tcexam\\tcexam\\admin\\code\\tce_functions_user_select.php \n', 'tags': '', 'url': 'TCExam_error.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};