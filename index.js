ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error )
            } )

const predefined = document.getElementById('predefined')
const custom = document.getElementById('custom')
const framework = document.getElementById('framework')
const treeItemNestedList = document.querySelectorAll('.tree-item-nested-list')
const feedbackBtn = document.getElementById('feedback-btn')


predefined.addEventListener('click', function(){
    treeItemNestedList[0].classList.toggle('d-none')
})

custom.addEventListener('click', function(){
    treeItemNestedList[1].classList.toggle('d-none')
})

framework.addEventListener('click', function(){
    treeItemNestedList[2].classList.toggle('d-none')
})

let text = document.getElementById('copy-this').innerHTML
const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}
