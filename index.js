ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error )
            } )

const predefined = document.getElementById('predefined')
const custom = document.getElementById('custom')
const framework = document.getElementById('framework')
const treeItemNestedList = document.querySelectorAll('.tree-item-nested-list')


predefined.addEventListener('click', function(){
    treeItemNestedList[0].classList.toggle('d-none')
})

custom.addEventListener('click', function(){
    treeItemNestedList[1].classList.toggle('d-none')
})

framework.addEventListener('click', function(){
    treeItemNestedList[2].classList.toggle('d-none')
})

const handleSearch = function(version) {
    if ( version === 'online' ) {
        this.$( 'head' ).append( '<link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css">' );
        this.$( 'body' ).append( '<script type="text/javascript" ' +
            'src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"></script>' );
        this.$( 'body' ).append( '<script type="text/javascript"> docsearch({' +
            'apiKey: "43f8f34ee5b472d5fe0cdca7777d776b",' +
            'indexName: "ckeditor",' +
            'inputSelector: "#docsearch_input",' +
            'debug: false' +
            '});' +
            '</script>' );
    } else {
        this.$( '.search-container' ).css( 'display', 'none' );
    }
}

sample.handleSearch( opts.version )
index.handleSearch( opts.version )
license.handleSearch( opts.version )