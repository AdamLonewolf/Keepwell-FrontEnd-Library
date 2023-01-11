data = [
    {
        titre : 'flexCenter',
        code :
         `.flexCenter{
            display: flex;
            justify-content: center;
            align-items: center;
            }`
    },
    {
        titre : 'flexSpaceAround',
        code : 
        `.flexSpaceAround{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }`
    },
    {
        titre : 'flexSpaceBetween',
        code :
        `.flexSpaceBetween{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }`
    },{
        titre : 'flexSpaceEvenly',
        code : 
        `.flexSpaceEvenly{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }`
    },{
        titre : 'flexLeft',
        code : 
        `.flexLeft{
            display: flex;
            justify-content: left;
            align-items: center;
        }`
    },{
        titre : 'flexRight',
        code : 
        `.flexRight{
            display: flex;
            justify-content: right;
            align-items: center;
        }`
    },{
        titre : 'flexAlignStart',
        code : 
        `.flexAlignStart{
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }`
    },{
        titre : 'flexAlignEnd',
        code : 
        `.flexAlignEnd{
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }`
    },{
        titre : 'flexColumnCenter',
        code : 
        `.flexColumnCenter{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }`
    },{
        titre : 'flexColumnSpaceAround',
        code : 
        `.flexColumnSpaceAround{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;

        }`
    },{
        titre : 'flexColumnSpaceBetween',
        code : 
        `.flexColumnSpaceBetween{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;

        }
        `
    },{
        titre : 'flexColumnSpaceEvenly',
        code : 
        `.flexColumnSpaceEvenly{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;

        }
        `
    },{
        titre : 'flexColumnStart',
        code : 
        `.flexColumnStart{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;

        }`
    },{
        titre : 'flexColumnEnd',
        code : 
        `.flexColumnEnd{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            flex-direction: column;
        }`
    },
]

function layout(obj,id) {
    return `        
    <div class="row">
    <h2> ${obj.titre} </h2>
    <div class="col-sm-6">
        <div class="position-relative">
            <button class="CopyText" onclick="CopyText('code-${id}','output-${id}')" "> <i class="bi bi-clipboard2"></i> Copier</button>
            <div class="result " id="output-${id}">Contenu copier dans le presse papier</div>
            <pre>
              <code class="language-css" id="code-${id}">
${obj.code}
              </code>
            </pre>
          </div>

    </div>
    <div class="col-sm-6">
        <h6>Exemple</h6>
        <div class="square-wrapper ${obj.titre}">
            <div class="square m-1"></div>
            <div class="square m-1"></div>
            <div class="square m-1"></div>
        </div>
    </div>
</div>
    `
  }




data.forEach((element,id) => {
    document.getElementById('container').innerHTML += layout(element,id)
});