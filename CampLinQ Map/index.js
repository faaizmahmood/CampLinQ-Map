

// General_data_func()

function General_data_func() {
  let General_data = document.querySelector('#General-Data');
  let Lists_Data = document.querySelector('#Lists-Data');
  let Kamp_filter_1 = document.querySelector('.Kamp-filter-1');
  let Kamp_filter_2 = document.querySelector('.Kamp-filter-2');
  let Kamp_filter_2_line = document.querySelector('.Kamp-filter-2-line');
  let Kamp_filter_1_line = document.querySelector('.Kamp-filter-1-line');

  General_data.style.display = "block";
  Lists_Data.style.display = "none";

  Kamp_filter_2_line.setAttribute('style', 'display: none !important;');
  Kamp_filter_1_line.setAttribute('style', 'display: block !important;');

  Kamp_filter_1.setAttribute('style', 'color : #EC691D !important;');
  Kamp_filter_2.setAttribute('style', 'color: #01223B !important;');

}
function Lists_data_func() {

  let General_data = document.querySelector('#General-Data');
  let Lists_Data = document.querySelector('#Lists-Data');
  let Kamp_filter_1 = document.querySelector('.Kamp-filter-1');
  let Kamp_filter_2 = document.querySelector('.Kamp-filter-2');
  let Kamp_filter_2_line = document.querySelector('.Kamp-filter-2-line');
  let Kamp_filter_1_line = document.querySelector('.Kamp-filter-1-line');

  General_data.style.display = "none";
  Lists_Data.style.display = "block";

  Kamp_filter_2_line.setAttribute('style', 'display: block !important;');
  Kamp_filter_1_line.setAttribute('style', 'display: none !important;');

  Kamp_filter_1.setAttribute('style', 'color : #01223B !important;');
  Kamp_filter_2.setAttribute('style', 'color: #EC691D!important;');

}



// show_Kamp_results

function show_Kamp_results(){
  let Kamp_orignal_content = document.querySelector('#Kamp-orignal-content');//Kamp-results-content
  let Kamp_results_content = document.querySelector('#Kamp-results-content');

  Kamp_orignal_content.style.display = "none";
  Kamp_results_content.style.display = "block";


}

function back_orignal_content(){
  let Kamp_orignal_content = document.querySelector('#Kamp-orignal-content');//Kamp-results-content
  let Kamp_results_content = document.querySelector('#Kamp-results-content');

  Kamp_orignal_content.style.display = "block";
  Kamp_results_content.style.display = "none";
}


// range


const rangeInput = document.getElementById('customRange');

rangeInput.addEventListener('input', updateRangeStyles);

function updateRangeStyles() {
  const value = rangeInput.value;
  const percentage = (value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;

  rangeInput.style.background = `linear-gradient(to right, #ec691d 0%, #ec691d ${percentage}%, #f6f6f6 ${percentage}%, #f6f6f6 100%)`;
}