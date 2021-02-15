
//获取CSS
getCSS.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/style.css')
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
            const style = document.createElement("style")
            style.innerHTML = req.response
            result.innerHTML = req.response
            document.body.append(style)
        }

    }
    req.send()
}
//获取JS
getJS.onclick = () => {
    const req = new XMLHttpRequest();
    req.open('GET', '/1.js')
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
            const script = document.createElement('script')
            script.innerHTML = req.response
            result.innerHTML = req.response
            document.body.append(script)
        }
    }
    req.send()
}
//获取HTML
getHTML.onclick = () => {
    const req = new XMLHttpRequest()
    req.open('GET', '/1.html')
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status >= 200 && req.status < 300) {
            const div = document.createElement('div')
            div.innerHTML = req.response
            result.innerHTML = req.response
        }
    }
    req.send()
}
//获取XML
getXML.onclick = () => {
    const req = new XMLHttpRequest()
    req.open('GET', '1.xml')
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
            console.log(req.responseXML)
            const xml = req.responseXML
            result.innerHTML = xml.getElementsByTagName('warning')[0].textContent
        }
    }
    req.send()
}
//获取JSON
getJSON.onclick = () => {
    const req = new XMLHttpRequest()
    req.open('GET', '1.json')
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
            const obj = JSON.parse(req.response)
            result.innerHTML = `您的名字是${obj.name}，您的年龄是${obj.age}。`
        }
    }
    req.send()
}
//获取分页
let n = 1
getNext.onclick = () => {
    const req = new XMLHttpRequest()
    n > 3 ? n = 1 : n
    req.open('GET', `/page${n}`)
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status >= 200 && req.status < 300) {
            const array = JSON.parse(req.response)
            let ul = document.createElement('ul')
            array.forEach(item => {
                const li = document.createElement('li')
                li.innerHTML = item.id
                ul.append(li)
            });
            result.append(ul)
            n++
        }
    }
    req.send()
}