let json = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
        "firstName": "Sam",
        "department": "tech",
        "designation": "manager",
        "salary": 40000,
        "raise eligible": true
      },
      {
        "firstName": "Mary",
        "department": "finance",
        "designation": "trainee",
        "salary": 18500,
        "raise eligible": true
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "executive",
        "salary": 21200,
        "raise eligible": false
      }
    ]
  };

  console.log(json); //print initial JSON for #1 and #2 to console

  const newemployee = {
    "firstName": "Anna",
    "department": "tech",
    "designation": "executive",
    "salary": 25600,
    "raise eligible": false
  };

  json["employees"].push(newemployee);  

  console.log(json); //print updated JSON to console for #3
  
  let totalSalary = 0;
  for (let i = 0; i < 4; i++) { //this iterates through employee salaries
    console.log(json["employees"][i].salary);
    totalSalary = totalSalary + json["employees"][i].salary;
  }
  console.log(totalSalary); //print updated JSON to console for #4

//attempting #5

  // for (const employee in json["employees"]){
  //   if (employee["raise eligible"] = true) {
  //     employee["salary"] = (employee["salary"] * .1);
  //     employee["raise eligible"] = false; 
  //   }
  // }

  //this works, figure out how to add new values
  // for (let i = 0; i < 4; i++) {
  //   if (json["employees"][i]["raise eligible"] == true) {
  //     console.log("ITS TRUE!!")
  //   }
  // }

  // for (let i = 0; i < 4; i++) {
  //   if (json["employees"][i]["raise eligible"] == true) {
  //     json["employees"]["salary"] = (json["employees"]["salary"] * 2);
  //   }
  // }
  // console.log(json);


