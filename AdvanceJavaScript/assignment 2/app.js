// Q:01
// a
let exp = "faraz" || (true + false) + 5 && " " || "true";
console.log("The value of exp is:", exp);
// Explanation:
  // "faraz" is a non-empty string, which is truthy.
  // The || operator returns the first truthy value it encounters.
  // Therefore, the rest of the expression is not evaluated.
  // exp is assigned the value "faraz".





// b
// let exp1 = (1 + 2) + ++b || 5 && 0 ; for b = 3;
let b = 3;
let exp1 = (1 + 2) + ++b || 5 && 0 ; 
console.log("The value of exp1 is:" , b );
// Explanation:
// 1. (1 + 2) evaluates to 3.
// 2. ++b increments b by 1, so b becomes 4. Thus, ++b evaluates to 4.
// 3. (1 + 2) + ++b evaluates to 3 + 4, which is 7.
// 4. Since 7 is truthy, the || operator short-circuits and returns 7.



// c
// let exp2 = 32 && true - ++a && " " || "true"; for a = 5;
let a = 5;
let exp2 = 32 && true - ++a && " " || "true"; 
console.log("The value of exp1 is:" , a );
// Explanation:
// 1. 32 is truthy, so continue to the next part.
// 2. ++a increments a by 1, so a becomes 6. Thus, ++a evaluates to 6.
// 3. true is converted to 1 in arithmetic operations.
// 4. 1 - 6 evaluates to -5.
// 5. -5 is truthy, so continue to the next part.
// 6. " " is a non-empty string, which is truthy.
// 7. The || operator returns the first truthy value it encounters, which is " ".




// d
// let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
console.log("The value of exp3 is:", exp3);
// Explanation:
// 1. true is converted to 1 in arithmetic operations.
// 2. true + 3 evaluates to 1 + 3, which is 4.
// 3. 4 * 5 evaluates to 20.
// 4. 20 is truthy, so continue to the next part.
// 5. undefined is falsy, so the expression 20 && undefined evaluates to undefined.
// 6. undefined is falsy, so continue to the next part.
// 7. "faraz" + 5 involves string concatenation.
// 8. "faraz" + 5 evaluates to "faraz5".




// e
// let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
console.log("The value of exp3 is:", exp4);
// Explanation:
// 1. 32 is converted to a string.
// 2. "abc" is concatenated to 32 to form "32abc".
// 3. "32abc" is a non-empty string, which is truthy.
// 4. The || operator short-circuits and returns the first truthy value it encounters, which is "32abc".




// f
// let exp5 = false || (true + true) + 15 && "" || 50;
let exp5 = false || (true + true) + 15 && "" || 50;
console.log("The value of exp3 is:", exp5);
// Explanation:
// 1. Evaluate `false || (true + true) + 15`:
//    - `(true + true)` evaluates to `2` because `true` is coerced to `1` in arithmetic operations.
//    - `2 + 15` evaluates to `17`.
//    - `false || 17` evaluates to `17` because `false` is falsy, so the expression short-circuits and returns the second operand, which is `17`.
// 2. Evaluate `17 && ""`:
//    - `""` is an empty string, which is falsy.
//    - Because the first operand `17` is truthy, the expression continues evaluation.
//    - `17 && ""` evaluates to `""` because the `&&` operator returns the second operand if the first operand is truthy and the second operand is falsy.
// 3. Evaluate `"" || 50`:
//    - `""` is falsy.
//    - `50` is truthy.
//    - The `||` operator returns the first truthy operand, which is `50`.




// g
// let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
console.log("The value of exp3 is:", exp6);
// Explanation:
// 1. Evaluate `(true + false) + 5`:
//    - `(true + false)` evaluates to `1` because `true` is coerced to `1` and `false` to `0` in arithmetic operations.
//    - `1 + 5` evaluates to `6`.
// 2. Evaluate `6 || false + 8 + "abc"`:
//    - `6` is truthy, so the expression short-circuits and returns `6`.
// 3. Evaluate `false + 8 + "abc"`:
//    - `(false + 8)` evaluates to `8` because `false` is coerced to `0` in arithmetic operations.
//    - `8 + "abc"` concatenates `8` with `"abc"` to form `"8abc"`.
// 4. Evaluate `"6" || "8abc" || "true"`:
//    - `"6"` is truthy, so the expression short-circuits and returns `"6"`.




// h
// let exp7 = "faraz" || false + 10 || "true";
let exp7 = "faraz" || false + 10 || "true";
console.log("The value of exp3 is:", exp7);
// Explanation:
// 1. Evaluate `"faraz" || false + 10`:
//    - `"faraz"` is a non-empty string, which is truthy. The expression short-circuits and returns `"faraz"`.
// 2. Evaluate `"faraz" || "true"`:
//    - `"faraz"` is truthy, so the expression short-circuits and returns `"faraz"`.




// i
// let exp8 = 12 + (false + false) + true && null || "faraz";
let exp8 = 12 + (false + false) + true && null || "faraz";
console.log("The value of exp3 is:", exp8);
// Explanation:
// 1. Evaluate `12 + (false + false) + true`:
//    - `(false + false)` evaluates to `0` because both operands are falsy.
//    - `12 + 0 + true` evaluates to `13` because `true` is coerced to `1` in arithmetic operations.
// 2. Evaluate `13 && null`:
//    - `13` is truthy, but `null` is falsy.
//    - Because the first operand `13` is truthy, the expression continues evaluation and returns the second operand, which is `null`.
// 3. Evaluate `null || "faraz"`:
//    - `null` is falsy, so the expression short-circuits and returns the second operand, which is `"faraz"`.




// j
// let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
console.log("The value of exp3 is:", exp9);
// Explanation:
// 1. Evaluate `(false + true + false + 2)`:
//    - `(false + true + false)` evaluates to `1` because `false` is coerced to `0` and `true` to `1` in arithmetic operations.
//    - `1 + 2` evaluates to `3`.
// 2. Evaluate `"faraz" && false`:
//    - `"faraz"` is truthy, but `false` is falsy.
//    - Because the second operand `false` is falsy, the expression short-circuits and returns `false`.
// 3. Evaluate `3 || false`:
//    - `3` is truthy, so the expression short-circuits and returns `3`.
// 4. Evaluate `3 || 1 + 10`:
//    - `3` is truthy, so the expression short-circuits and returns `3`.




// k
// let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
console.log("The value of exp3 is:", exp10);
// Explanation:
// 1. Evaluate `(true + false) + 5`:
//    - `(true + false)` evaluates to `1` because `true` is coerced to `1` and `false` to `0` in arithmetic operations.
//    - `1 + 5` evaluates to `6`.
// 2. Evaluate `6 || false + 8 + "abc"`:
//    - `6` is truthy, so the expression short-circuits and returns `6`.
// 3. Evaluate `false + 8 + "abc"`:
//    - `(false + 8)` evaluates to `8` because `false` is coerced to `0` in arithmetic operations.
//    - `8 + "abc"` concatenates `8` with `"abc"` to form `"8abc"`.
// 4. Evaluate `"6" || "8abc" || "true"`:
//    - `"6"` is truthy, so the expression short-circuits and returns `"6"`.




// l
// let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
console.log("The value of exp3 is:", exp11);
// Explanation:
// 1. Evaluate `(true + false) * 3`:
//    - `(true + false)` evaluates to `1` because `true` is coerced to `1` and `false` to `0` in arithmetic operations.
//    - `1 * 3` evaluates to `3`.
// 2. Evaluate `3 && ""`:
//    - `""` is an empty string, which is falsy.
//    - Because the second operand `""` is falsy, the expression short-circuits and returns `""`.
// 3. Evaluate `"" || false + true - (12 + true + true + false)`:
//    - `""` is falsy, so the expression continues evaluation.
//    - Evaluate `false + true - (12 + true + true + false)`:
//      - `(12 + true + true + false)` evaluates to `14` because `true` is coerced to `1` and `false` to `0` in arithmetic operations.
//      - `false + true` evaluates to `1`.
//      - `1 - 14` evaluates to `-13`.
//    - `-13` is truthy, so the expression short-circuits and returns `-13`.




// Q:02
var mobiles = {
  iphone: {
    iphone7: {
      processor: "Snapdragon 8 Gen 2",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: 200,
          ultrawide: 12,
          telephoto: 10,
          telephotoPeriscope: 10,
        },
        front: 10,
      },
      brand:"iphone",
      battery: 5000,
      operatingSystem: "Android 13",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone8: {
      processor: "Snapdragon 12 Gen 5",
      memory: {
        ram: 8,
        storage: 256,
      },
      brand:"iphone",
      camera: {
        rear: {
          main: 180,
          ultrawide: 15,
          telephoto: 10,
          telephotoPeriscope: 20,
        },
        front: 12,
      },
      battery: 8000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone8plus: {
      processor: "Snapdragon 5 Gen 6",
      memory: {
        ram: 8,
        storage: 128,
      },
      brand:"iphone",

      camera: {
        rear: {
          main: 160,
          ultrawide: 18,
          telephoto: 10,
          telephotoPeriscope: 8,
        },
        front: 16,
      },
      battery: 5000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphoneX: {
      processor: "Snapdragon 5 Gen 4",
      memory: {
        ram: 8,
        storage: 256,
      },
      brand:"iphone",

      camera: {
        rear: {
          main: 130,
          ultrawide: 16,
          telephoto: 10,
          telephotoPeriscope: 18,
        },
        front: 14,
      },
      battery: 6000,
      operatingSystem: "iphone X",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone11: {
      processor: "Snapdragon 7 Gen 9",
      memory: {
        ram: 16,
        storage: 512,
      },
      camera: {
        rear: {
          main: 150,
          ultrawide: 24,
          telephoto: 16,
          telephotoPeriscope: 10,
        },
        front: 20,
      },
      brand:"iphone",

      battery: 10000,
      operatingSystem: "iphone 11",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
  },
  xiomi: {
    redmiA2: {
      modelName: "Mi 12 Pro",
      display: {
        size: 6.73,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 120,
      },
      brand:"xiomi",

      processor: "Snapdragon 8 Gen 1",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 4600,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    redmi10: {
      modelName: "Mi 8 Pro",
      display: {
        size: 5.73,
        resolution: "3000 x 1320",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      brand:"xiomi",
      processor: "Snapdragon 7 Gen 5",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      brand:"xiomi",

      battery: 5000,
      operatingSystem: "Android 11",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi11: {
      modelName: "Mi 14 Pro",
      display: {
        size: 6.0,
        resolution: "3000 x 1240",
        panelType: "AMOLED",
        refreshRate: 150,
      },
      brand:"xiomi",

      processor: "Snapdragon 8 Gen 4",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 8000,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi12: {
      modelName: "Mi 12 Pro",
      display: {
        size: 7.4,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 180,
      },
      brand:"xiomi",

      processor: "Snapdragon 12 Gen 1",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 8000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13: {
      modelName: "Mi 14 Pro",
      display: {
        size: 8.03,
        resolution: "4200 x 1540",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      brand:"xiomi",

      processor: "Snapdragon 8 Gen 6",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13C: {
      modelName: "Mi 14 Pro",
      display: {
        size: 8.43,
        resolution: "4200 x 1340",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 9 Gen 5",
      memory: {
        ram: 12,
        storage: 512,
      },
      brand:"xiomi",

      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
  },
  realme: {
    realmiNote50: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.5 inches",
        resolution: "FHD+ (1080 x 2400 pixels)",
        type: "AMOLED",
      },
      brand:"xiomi",

      processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
      memory: {
        ram: "8GB",
        storage: "128GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      battery: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmiC67: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.7 inches",
        resolution: "FHD+ (1280 x 2100 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
      memory: {
        ram: "8GB",
        storage: "256GB",
      },
      brand:"xiomi",

      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "14MP",
        },
      },
      battery: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 11",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmiC53: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "7. 1inches",
        resolution: "FHD+ (1180 x 2500 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "128GB",
      },
      brand:"xiomi",

      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "18MP",
        },
      },
      battery: {
        capacity: "8000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmi9: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "7.2 inches",
        resolution: "FHD+ (1180 x 2200 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "256GB",
      },
      brand:"xiomi",

      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "24MP",
        },
      },
      battery: {
        capacity: "10000mAh",
        fastCharging: "75W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmi9i: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.9 inches",
        resolution: "FHD+ (1480 x 2400 pixels)",
        type: "AMOLED",
      },
      brand:"xiomi",

      processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "512GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      battery: {
        capacity: "2000mAh",
        fastCharging: "70W",
      },
      operatingSystem: "Android 13",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
  },
  samsung: {
    samsung_Galaxy_S24: {
      brand: "Samsung",
      model: "Galaxy S24 Ultra", // Replace with specific model

      // Display
      displaySize: 6.8, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 2", // Replace with actual processor
      memory: {
          ram: 12,
          storage: 512,
        },

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S51: {
      brand: "Samsung",
      model: "Galaxy S51 Pro", // Replace with specific model

      // Display
      displaySize: 7.2, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 9 Gen 4", // Replace with actual processor
      memory: {
          ram: 8,
          storage: 128,
        },

      // Cameras
      rearCamera: {
        megapixel: 112,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 8000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 11",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_Prime: {
      brand: "Samsung",
      model: "Galaxy Prime Ultra", // Replace with specific model

      // Display
      displaySize: 7.4, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 10", // Replace with actual processor
      memory: {
          ram: 4,
          storage: 64,
        },

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 13",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S46: {
      brand: "Samsung",
      model: "Galaxy S46 Ultra", // Replace with specific model

      // Display
      displaySize: 5.11, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 2", // Replace with actual processor
      memory: {
          ram: 6,
          storage: 64,
        },

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 20000, // mAh
      fastCharging: "65W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S77: {
      brand: "Samsung",
      model: "Galaxy S77 Ultra", // Replace with specific model

      // Display
      displaySize: 8.5, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 12 Gen 24", // Replace with actual processor
      memory: {
          ram: 12,
          storage: 512,
        },

      // Cameras
      rearCamera: {
        megapixel: 158,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 20000, // mAh
      fastCharging: "85W Super Fast Charging",

      // Operating System
      operatingSystem: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: true,
    },
  },
};
let brand = document.getElementById("brand")
let model = document.getElementById('model')

var brandsKeys = Object.keys(mobiles)
for(var i=0; i<=brandsKeys.length; i++){
  brand.innerHTML += `<option>${brandsKeys[i]}</option>`
    // console.log(brandsKeys[i])
}
function selectBrand(){
  let selectBrand = brand.value;
  let allModels = Object.keys(mobiles[selectBrand])
  for(var i=0; i<=allModels.length; i++){
    model.innerHTML += `<option>${allModels[i]}</option>` 

  }
  console.log(allModels)
}
function searchbutton(){
  let card = document.getElementById('cardPortion')
  let filterObj = mobiles[brand.value][model.value];
  console.log(mobiles[brand.value][model.value])
  card.innerHTML =`<div class="card" style="width: 18rem; margin-bottom: 20px;">
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${filterObj.brand}</li>
    <li class="list-group-item">${filterObj.operatingSystem}</li>
    <li class="list-group-item">${filterObj.processor}</li>
  </ul>
</div>`

}