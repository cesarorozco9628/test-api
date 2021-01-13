function printData(data) {
    // obtener donde quiero poner los datos/elementos
    const containerData = document.getElementById('questions-container');
    // generar los datos/elementos
    let html = '';
    data.forEach(element => {
        html += `<div class="col-md-4 mt-3">
                <div class="card h-100">
                    <div class="card-body">
                        ${element.question}
                    </div>
                </div>
            </div>`
    });
    // poner los datos en el html
    containerData.innerHTML = html;

}

function getQuestions() {
    const totalQuestions = document.getElementById('totalQuestions').value;
    const url = `https://opentdb.com/api.php?amount=${totalQuestions}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => printData(data.results))
}

