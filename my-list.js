var form = document.getElementById('form')
var form2  = document.getElementById('form2')
var form3 = document.getElementById('form3')



var submit = function (event) {
    event.preventDefault()

    var reader = new FileReader()

    var name = event.target.children[0].children[0].files[0].name
    
    
    reader.addEventListener('load', function () {
        if(this.result && localStorage) {
            window.localStorage.setItem(name, this.result)
            parentDiv.innerHTML = ''
            showImages()
        }
       
    })

    reader.readAsDataURL(event.target.children[0].children[0].files[0])

    console.log(name)

}

var parentDiv = document.getElementById('result')
var parentDiv2 = document.getElementById('result2')
var parentDiv3 = document.getElementById('result3')


form.addEventListener('submit',submit )
form2.addEventListener('submit',submit )
form3.addEventListener('submit',submit )

function showImages() {
    for(let i = 0;i< window.localStorage.length; i++){
        let res = window.localStorage.getItem(window.localStorage.key(i))
        var image = new Image()
        image.src = res

        parentDiv.appendChild(image)

    }
}

function remove() {
    window.localStorage.clear()
    parentDiv.innerHTML = ''
}

showImages()