//REVIEW -  - Add note
let note = []
function addNote() {
        let text = document.getElementById('text').value
        if (text === "") {
                alert('PLease add a note!')
        } else {
                let inputText = document.getElementById('input')
                let btn = document.getElementById('deleteBtn')
                const para = document.createElement('h3')
                const node = document.createTextNode(text)
                para.appendChild(node)

                const para1 = document.createElement('button')
                const node1 = document.createTextNode("DELETE")
                para1.appendChild(node1)

                
                note.push(text)
                inputText.appendChild(para)
                btn.appendChild(para1)
                
        }
        console.log(note)
}

//REVIEW - Delete Note
//NOTE - not finish
function deleteNote() {
        let textNeedDel = document.getElementById('text').value
        

}


//REVIEW - change background color
const backgroundColor = ['#2B2A4C', '#B31312', '#EA906C', '#219C90']
function randomBgColor() {
       let randomColor = backgroundColor[Math.floor(Math.random() * backgroundColor.length)]
       document.body.style.backgroundColor = randomColor
}
