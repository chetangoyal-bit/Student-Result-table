var el_up = document.getElementById("GFG_UP");
var total = 0;

var jsondata = [
  {
    name: "rajiv",
    marks: {
      Maths: 18,
      English: 21,
      Science: 45,
    },
    rollNumber: "KV2017-5A2",
  },
  {
    name: "abhishek",
    marks: {
      Maths: 43,
      English: 30,
      Science: 37,
    },
    rollNumber: "KV2017-5A1",
  },
  {
    name: "zoya",
    marks: {
      Maths: 42,
      English: 31,
      Science: 50,
    },
    rollNumber: "KV2017-5A3",
  },
];

function compare_name(a, b){
        // a should come before b in the sorted order
        if(a.name < b.name){
                return -1;
        // a should come after b in the sorted order
        }else if(a.name > b.name){
                return 1;
        // a and b are the same
        }else{
                return 0;
        }
}

jsondata.sort(compare_name)
// console.log(jsondata)

total = jsondata.map((el) => {
  return el.marks.English + el.marks.Maths + el.marks.Science;
});

var maxindex = total.indexOf(Math.max(...total));
// console.log(maxindex)

function constructTable(selector){
  var heading = `
      <tr>
        <thead><strong>Student Result Board</strong></thead>
      </tr>
      <tr>
        <td><strong><em>Student Name</em></strong></td>
        <td><strong><em>Roll Number</em></strong></td>
        <td><strong><em>Total Marks</em></strong></td>
        <td><strong><em>Status</em></strong></td>
      </tr>
  `;
  document.querySelector(selector).insertAdjacentHTML('afterbegin', heading);

  for (var i = 0 ; i<jsondata.length; i++){
    if (jsondata[i].marks.English<20 || jsondata[i].marks.Maths<20 || jsondata[i].marks.Science<20){
      addRow(jsondata[i], 'Fail');
    }
    else if (i == maxindex){
      addRow(jsondata[i], 'Topper');
    }
    else{
      addRow(jsondata[i], 'Pass');
    }
  }
}

function addRow(data, status){
  var color;
  if (status == 'Fail'){
    color = 'red';
  } else if(status == 'Topper'){
    color = 'green';
  } else{
    color = '';
  }
  // console.log(color);
  var row = `
      <tr style="color:${color}">
        <td>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</td>
        <td>${data.rollNumber}</td>
        <td>${data.marks.English + data.marks.Science + data.marks.Maths}</td>
        <td>${status}</td>
      </tr>
  `;

  document.querySelector('#table').insertAdjacentHTML('beforeend',row);
}
