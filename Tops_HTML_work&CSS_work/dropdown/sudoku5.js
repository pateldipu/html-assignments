function Sudoku() {

    let A11 = parseInt(document.getElementById("11").value)
    let A21 = parseInt(document.getElementById("21").value)
    let A31 = parseInt(document.getElementById("31").value)
    let A41 = parseInt(document.getElementById("41").value)
    let A51 = parseInt(document.getElementById("51").value)
    let A61 = parseInt(document.getElementById("61").value)
    let A71 = parseInt(document.getElementById("71").value)
    let A81 = parseInt(document.getElementById("81").value)
    let A91 = parseInt(document.getElementById("91").value)

    let A12 = parseInt(document.getElementById("12").value)
    let A22 = parseInt(document.getElementById("22").value)
    let A32 = parseInt(document.getElementById("32").value)
    let A42 = parseInt(document.getElementById("42").value)
    let A52 = parseInt(document.getElementById("52").value)
    let A62 = parseInt(document.getElementById("62").value)
    let A72 = parseInt(document.getElementById("72").value)
    let A82 = parseInt(document.getElementById("82").value)
    let A92 = parseInt(document.getElementById("92").value)

    let A13 = parseInt(document.getElementById("13").value)
    let A23 = parseInt(document.getElementById("23").value)
    let A33 = parseInt(document.getElementById("33").value)
    let A43 = parseInt(document.getElementById("43").value)
    let A53 = parseInt(document.getElementById("53").value)
    let A63 = parseInt(document.getElementById("63").value)
    let A73 = parseInt(document.getElementById("73").value)
    let A83 = parseInt(document.getElementById("83").value)
    let A93 = parseInt(document.getElementById("93").value)

    let A14 = parseInt(document.getElementById("14").value)
    let A24 = parseInt(document.getElementById("24").value)
    let A34 = parseInt(document.getElementById("34").value)
    let A44 = parseInt(document.getElementById("44").value)
    let A54 = parseInt(document.getElementById("54").value)
    let A64 = parseInt(document.getElementById("64").value)
    let A74 = parseInt(document.getElementById("74").value)
    let A84 = parseInt(document.getElementById("84").value)
    let A94 = parseInt(document.getElementById("94").value)

    let A15 = parseInt(document.getElementById("15").value)
    let A25 = parseInt(document.getElementById("25").value)
    let A35 = parseInt(document.getElementById("35").value)
    let A45 = parseInt(document.getElementById("45").value)
    let A55 = parseInt(document.getElementById("55").value)
    let A65 = parseInt(document.getElementById("65").value)
    let A75 = parseInt(document.getElementById("75").value)
    let A85 = parseInt(document.getElementById("85").value)
    let A95 = parseInt(document.getElementById("95").value)

    let A16 = parseInt(document.getElementById("16").value)
    let A26 = parseInt(document.getElementById("26").value)
    let A36 = parseInt(document.getElementById("36").value)
    let A46 = parseInt(document.getElementById("46").value)
    let A56 = parseInt(document.getElementById("56").value)
    let A66 = parseInt(document.getElementById("66").value)
    let A76 = parseInt(document.getElementById("76").value)
    let A86 = parseInt(document.getElementById("86").value)
    let A96 = parseInt(document.getElementById("96").value)

    let A17 = parseInt(document.getElementById("17").value)
    let A27 = parseInt(document.getElementById("27").value)
    let A37 = parseInt(document.getElementById("37").value)
    let A47 = parseInt(document.getElementById("47").value)
    let A57 = parseInt(document.getElementById("57").value)
    let A67 = parseInt(document.getElementById("67").value)
    let A77 = parseInt(document.getElementById("77").value)
    let A87 = parseInt(document.getElementById("87").value)
    let A97 = parseInt(document.getElementById("97").value)

    let A18 = parseInt(document.getElementById("18").value)
    let A28 = parseInt(document.getElementById("28").value)
    let A38 = parseInt(document.getElementById("38").value)
    let A48 = parseInt(document.getElementById("48").value)
    let A58 = parseInt(document.getElementById("58").value)
    let A68 = parseInt(document.getElementById("68").value)
    let A78 = parseInt(document.getElementById("78").value)
    let A88 = parseInt(document.getElementById("88").value)
    let A98 = parseInt(document.getElementById("98").value)

    let A19 = parseInt(document.getElementById("19").value)
    let A29 = parseInt(document.getElementById("29").value)
    let A39 = parseInt(document.getElementById("39").value)
    let A49 = parseInt(document.getElementById("49").value)
    let A59 = parseInt(document.getElementById("59").value)
    let A69 = parseInt(document.getElementById("69").value)
    let A79 = parseInt(document.getElementById("79").value)
    let A89 = parseInt(document.getElementById("89").value)
    let A99 = parseInt(document.getElementById("99").value)

    // 11
    if (A11 !== A12 && A11 !== A13 && A11 !== A14 && A11 !== A15 && A11 !== A16 && A11 !== A17 && A11 !== A18 && A11 !== A19 &&
        A11 !== A21 && A11 !== A31 && A11 !== A41 && A11 !== A51 && A11 !== A61 && A11 !== A71 && A11 !== A81 && A11 !== A91 &&
        A11 !== A22 && A11 !== A23 && A11 !== A32 && A11 !== A33) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 12
    if (A12 !== A11 && A12 !== A13 && A12 !== A14 && A12 !== A15 && A12 !== A16 && A12 !== A17 && A12 !== A18 && A12 !== A19 &&
        A12 !== A22 && A12 !== A32 && A12 !== A42 && A12 !== A52 && A12 !== A62 && A12 !== A72 && A12 !== A82 && A12 !== A92 &&
        A12 !== A21 && A12 !== A31 && A12 !== A32 && A12 !== A33) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 13
    if (A13 !== A11 && A13 !== A12 && A13 !== A14 && A13 !== A15 && A13 !== A16 && A13 !== A17 && A13 !== A18 && A13 !== A19 &&
        A13 !== A23 && A13 !== A33 && A13 !== A43 && A13 !== A53 && A13 !== A63 && A13 !== A73 && A13 !== A83 && A13 !== A93 &&
        A13 !== A21 && A13 !== A31 && A13 !== A32 && A13 !== A33) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 14
    if (A14 !== A11 && A14 !== A12 && A14 !== A13 && A14 !== A15 && A14 !== A16 && A14 !== A17 && A14 !== A18 && A14 !== A19 &&
        A14 !== A24 && A14 !== A34 && A14 !== A44 && A14 !== A54 && A14 !== A64 && A14 !== A74 && A14 !== A84 && A14 !== A94 &&
        A14 !== A25 && A14 !== A35 && A14 !== A26 && A14 !== A36) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 15
    if (A15 !== A11 && A15 !== A12 && A15 !== A13 && A15 !== A14 && A15 !== A16 && A15 !== A17 && A15 !== A18 && A15 !== A19 &&
        A15 !== A25 && A15 !== A35 && A15 !== A45 && A15 !== A55 && A15 !== A65 && A15 !== A75 && A15 !== A85 && A15 !== A95 &&
        A15 !== A24 && A15 !== A34 && A15 !== A26 && A15 !== A36) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 16
    if (A16 !== A11 && A16 !== A12 && A16 !== A13 && A16 !== A14 && A16 !== A15 && A16 !== A17 && A16 !== A18 && A16 !== A19 &&
        A16 !== A26 && A16 !== A36 && A16 !== A46 && A16 !== A56 && A16 !== A66 && A16 !== A76 && A16 !== A86 && A16 !== A96 &&
        A16 !== A24 && A16 !== A34 && A16 !== A25 && A16 !== A35) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 17
    if (A17 !== A11 && A17 !== A12 && A17 !== A13 && A17 !== A14 && A17 !== A15 && A17 !== A16 && A17 !== A18 && A17 !== A19 &&
        A17 !== A27 && A17 !== A37 && A17 !== A47 && A17 !== A57 && A17 !== A67 && A17 !== A77 && A17 !== A87 && A17 !== A97 &&
        A17 !== A28 && A17 !== A38 && A17 !== A29 && A17 !== A39) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 18
    if (A18 !== A11 && A18 !== A12 && A18 !== A13 && A18 !== A14 && A18 !== A15 && A18 !== A16 && A18 !== A17 && A18 !== A19 &&
        A18 !== A28 && A18 !== A38 && A18 !== A48 && A18 !== A58 && A18 !== A68 && A18 !== A78 && A18 !== A88 && A18 !== A98 &&
        A18 !== A27 && A18 !== A37 && A18 !== A29 && A18 !== A39) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 19
    if (A19 !== A11 && A19 !== A12 && A19 !== A13 && A19 !== A14 && A19 !== A15 && A19 !== A16 && A19 !== A17 && A19 !== A18 &&
        A19 !== A29 && A19 !== A39 && A19 !== A49 && A19 !== A59 && A19 !== A69 && A19 !== A79 && A19 !== A89 && A19 !== A99 &&
        A19 !== A27 && A19 !== A37 && A19 !== A28 && A19 !== A38) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 21
    if (A21 !== A22 && A21 !== A23 && A21 !== A24 && A21 !== A25 && A21 !== A26 && A21 !== A27 && A21 !== A28 && A21 !== A29 &&
        A21 !== A11 && A21 !== A31 && A21 !== A41 && A21 !== A51 && A21 !== A61 && A21 !== A71 && A21 !== A81 && A21 !== A91 &&
        A21 !== A12 && A21 !== A32 && A21 !== A13 && A21 !== A33) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 22
    if (A22 !== A21 && A22 !== A23 && A22 !== A24 && A22 !== A25 && A22 !== A26 && A22 !== A27 && A22 !== A28 && A22 !== A29 &&
        A22 !== A12 && A22 !== A32 && A22 !== A42 && A22 !== A52 && A22 !== A62 && A22 !== A72 && A22 !== A82 && A22 !== A92 &&
        A22 !== A12 && A22 !== A31 && A22 !== A13 && A22 !== A33) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 23
    if (A23 !== A21 && A23 !== A22 && A23 !== A24 && A23 !== A25 && A23 !== A26 && A23 !== A27 && A23 !== A28 && A23 !== A29 &&
        A23 !== A13 && A23 !== A33 && A23 !== A43 && A23 !== A53 && A23 !== A63 && A23 !== A73 && A23 !== A83 && A23 !== A93 &&
        A23 !== A11 && A23 !== A31 && A23 !== A12 && A23 !== A32) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 24
    if (A24 !== A21 && A24 !== A22 && A24 !== A23 && A24 !== A25 && A24 !== A26 && A24 !== A27 && A24 !== A28 && A24 !== A29 &&
        A24 !== A14 && A24 !== A34 && A24 !== A44 && A24 !== A54 && A24 !== A64 && A24 !== A74 && A24 !== A84 && A24 !== A94 &&
        A24 !== A15 && A24 !== A35 && A24 !== A16 && A24 !== A36) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 25
    if (A25 !== A21 && A25 !== A22 && A25 !== A23 && A25 !== A24 && A25 !== A26 && A25 !== A27 && A25 !== A28 && A25 !== A29 &&
        A25 !== A15 && A25 !== A35 && A25 !== A45 && A25 !== A55 && A25 !== A65 && A25 !== A75 && A25 !== A85 && A25 !== A95 &&
        A25 !== A14 && A25 !== A34 && A25 !== A16 && A25 !== A36) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 26
    if (A26 !== A21 && A26 !== A22 && A26 !== A23 && A26 !== A24 && A26 !== A25 && A26 !== A27 && A26 !== A28 && A26 !== A29 &&
        A26 !== A16 && A26 !== A36 && A26 !== A46 && A26 !== A56 && A26 !== A66 && A26 !== A76 && A26 !== A86 && A26 !== A96 &&
        A26 !== A14 && A26 !== A34 && A26 !== A15 && A26 !== A35) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 27
    if (A27 !== A21 && A27 !== A22 && A27 !== A23 && A27 !== A24 && A27 !== A25 && A27 !== A26 && A27 !== A28 && A27 !== A29 &&
        A27 !== A17 && A27 !== A37 && A27 !== A47 && A27 !== A57 && A27 !== A67 && A27 !== A77 && A27 !== A87 && A27 !== A97 &&
        A27 !== A18 && A27 !== A38 && A27 !== A19 && A27 !== A39) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 28
    if (A28 !== A21 && A28 !== A22 && A28 !== A23 && A28 !== A24 && A28 !== A25 && A28 !== A26 && A28 !== A28 && A28 !== A29 &&
        A28 !== A18 && A28 !== A38 && A28 !== A48 && A28 !== A58 && A28 !== A68 && A28 !== A78 && A28 !== A88 && A28 !== A98 &&
        A28 !== A17 && A28 !== A37 && A28 !== A19 && A28 !== A39) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 29
    if (A29 !== A21 && A29 !== A22 && A29 !== A23 && A29 !== A24 && A29 !== A25 && A29 !== A26 && A29 !== A29 && A29 !== A29 &&
        A29 !== A19 && A29 !== A39 && A29 !== A49 && A29 !== A59 && A29 !== A69 && A29 !== A79 && A29 !== A89 && A29 !== A99 &&
        A29 !== A17 && A29 !== A37 && A29 !== A18 && A29 !== A38) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 31
    if (A31 !== A32 && A31 !== A33 && A31 !== A34 && A31 !== A35 && A31 !== A36 && A31 !== A37 && A31 !== A38 && A31 !== A39 &&
        A31 !== A11 && A31 !== A21 && A31 !== A41 && A31 !== A51 && A31 !== A61 && A31 !== A71 && A31 !== A81 && A31 !== A91 &&
        A31 !== A12 && A31 !== A22 && A31 !== A13 && A31 !== A23) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 32
    if (A32 !== A31 && A32 !== A33 && A32 !== A34 && A32 !== A35 && A32 !== A36 && A32 !== A37 && A32 !== A38 && A32 !== A39 &&
        A32 !== A12 && A32 !== A22 && A32 !== A42 && A32 !== A52 && A32 !== A62 && A32 !== A72 && A32 !== A82 && A32 !== A92 &&
        A32 !== A11 && A32 !== A21 && A32 !== A13 && A32 !== A23) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 33
    if (A33 !== A31 && A33 !== A32 && A33 !== A34 && A33 !== A35 && A33 !== A36 && A33 !== A37 && A33 !== A38 && A33 !== A39 &&
        A33 !== A13 && A33 !== A23 && A33 !== A43 && A33 !== A53 && A33 !== A63 && A33 !== A73 && A33 !== A83 && A33 !== A93 &&
        A33 !== A11 && A33 !== A21 && A33 !== A12 && A33 !== A22) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 34
    if (A34 !== A31 && A34 !== A32 && A34 !== A33 && A34 !== A35 && A34 !== A36 && A34 !== A37 && A34 !== A38 && A34 !== A39 &&
        A34 !== A14 && A34 !== A24 && A34 !== A44 && A34 !== A54 && A34 !== A64 && A34 !== A74 && A34 !== A84 && A34 !== A94 &&
        A34 !== A15 && A34 !== A25 && A34 !== A16 && A34 !== A26) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 35
    if (A35 !== A31 && A35 !== A32 && A35 !== A33 && A35 !== A34 && A35 !== A36 && A35 !== A37 && A35 !== A38 && A35 !== A39 &&
        A35 !== A15 && A35 !== A25 && A35 !== A45 && A35 !== A55 && A35 !== A65 && A35 !== A75 && A35 !== A85 && A35 !== A95 &&
        A35 !== A14 && A35 !== A24 && A35 !== A16 && A35 !== A26) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 36
    if (A36 !== A31 && A36 !== A32 && A36 !== A33 && A36 !== A34 && A36 !== A35 && A36 !== A37 && A36 !== A38 && A36 !== A39 &&
        A36 !== A16 && A36 !== A26 && A36 !== A46 && A36 !== A56 && A36 !== A66 && A36 !== A76 && A36 !== A86 && A36 !== A96 &&
        A36 !== A14 && A36 !== A24 && A36 !== A15 && A36 !== A25) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 37
    if (A37 !== A31 && A37 !== A32 && A37 !== A33 && A37 !== A34 && A37 !== A35 && A37 !== A36 && A37 !== A38 && A37 !== A39 &&
        A37 !== A17 && A37 !== A27 && A37 !== A47 && A37 !== A57 && A37 !== A67 && A37 !== A77 && A37 !== A87 && A37 !== A97 &&
        A37 !== A18 && A37 !== A28 && A37 !== A19 && A37 !== A29) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 38
    if (A38 !== A31 && A38 !== A32 && A38 !== A33 && A38 !== A34 && A38 !== A35 && A38 !== A36 && A38 !== A37 && A38 !== A39 &&
        A38 !== A18 && A38 !== A28 && A38 !== A48 && A38 !== A58 && A38 !== A68 && A38 !== A78 && A38 !== A88 && A38 !== A98 &&
        A38 !== A17 && A38 !== A27 && A38 !== A19 && A38 !== A29) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 39
    if (A39 !== A31 && A39 !== A32 && A39 !== A33 && A39 !== A34 && A39 !== A35 && A39 !== A36 && A39 !== A37 && A39 !== A38 &&
        A39 !== A19 && A39 !== A29 && A39 !== A49 && A39 !== A59 && A39 !== A69 && A39 !== A79 && A39 !== A89 && A39 !== A99 &&
        A39 !== A17 && A39 !== A27 && A39 !== A18 && A39 !== A28) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 41
    if (A41 !== A42 && A41 !== A43 && A41 !== A44 && A41 !== A45 && A41 !== A46 && A41 !== A47 && A41 !== A48 && A41 !== A49 &&
        A41 !== A11 && A41 !== A21 && A41 !== A31 && A41 !== A51 && A41 !== A61 && A41 !== A71 && A41 !== A81 && A41 !== A91 &&
        A41 !== A52 && A41 !== A62 && A41 !== A53 && A41 !== A63) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 42
    if (A42 !== A41 && A42 !== A43 && A42 !== A44 && A42 !== A45 && A42 !== A46 && A42 !== A47 && A42 !== A48 && A42 !== A49 &&
        A42 !== A12 && A42 !== A22 && A42 !== A32 && A42 !== A52 && A42 !== A62 && A42 !== A72 && A42 !== A82 && A42 !== A92 &&
        A42 !== A51 && A42 !== A61 && A42 !== A53 && A42 !== A63) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 43
    if (A43 !== A41 && A43 !== A42 && A43 !== A44 && A43 !== A45 && A43 !== A46 && A43 !== A47 && A43 !== A48 && A43 !== A49 &&
        A43 !== A13 && A43 !== A23 && A43 !== A33 && A43 !== A53 && A43 !== A63 && A43 !== A73 && A43 !== A83 && A43 !== A93 &&
        A43 !== A51 && A43 !== A61 && A43 !== A52 && A43 !== A62) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 44
    if (A44 !== A41 && A44 !== A42 && A44 !== A43 && A44 !== A45 && A44 !== A46 && A44 !== A47 && A44 !== A48 && A44 !== A49 &&
        A44 !== A14 && A44 !== A24 && A44 !== A34 && A44 !== A54 && A44 !== A64 && A44 !== A74 && A44 !== A84 && A44 !== A94 &&
        A44 !== A55 && A44 !== A65 && A44 !== A56 && A44 !== A66) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 45
    if (A45 !== A41 && A45 !== A42 && A45 !== A43 && A45 !== A44 && A45 !== A46 && A45 !== A47 && A45 !== A48 && A45 !== A49 &&
        A45 !== A15 && A45 !== A25 && A45 !== A35 && A45 !== A55 && A45 !== A65 && A45 !== A75 && A45 !== A85 && A45 !== A95 &&
        A45 !== A54 && A45 !== A64 && A45 !== A56 && A45 !== A66) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 46
    if (A46 !== A41 && A46 !== A42 && A46 !== A43 && A46 !== A44 && A46 !== A45 && A46 !== A47 && A46 !== A48 && A46 !== A49 &&
        A46 !== A16 && A46 !== A26 && A46 !== A36 && A46 !== A56 && A46 !== A66 && A46 !== A76 && A46 !== A86 && A46 !== A96 &&
        A46 !== A54 && A46 !== A64 && A46 !== A55 && A46 !== A65) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 47
    if (A47 !== A41 && A47 !== A42 && A47 !== A43 && A47 !== A44 && A47 !== A45 && A47 !== A46 && A47 !== A48 && A47 !== A49 &&
        A47 !== A17 && A47 !== A27 && A47 !== A37 && A47 !== A57 && A47 !== A67 && A47 !== A77 && A47 !== A87 && A47 !== A97 &&
        A47 !== A58 && A47 !== A68 && A47 !== A59 && A47 !== A69) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 48
    if (A48 !== A41 && A48 !== A42 && A48 !== A43 && A48 !== A44 && A48 !== A45 && A48 !== A46 && A48 !== A47 && A48 !== A49 &&
        A48 !== A18 && A48 !== A28 && A48 !== A38 && A48 !== A58 && A48 !== A68 && A48 !== A78 && A48 !== A88 && A48 !== A98 &&
        A48 !== A57 && A48 !== A67 && A48 !== A59 && A48 !== A69) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 49
    if (A49 !== A41 && A49 !== A42 && A49 !== A43 && A49 !== A44 && A49 !== A45 && A49 !== A46 && A49 !== A47 && A49 !== A48 &&
        A49 !== A19 && A49 !== A29 && A49 !== A39 && A49 !== A59 && A49 !== A69 && A49 !== A79 && A49 !== A89 && A49 !== A99 &&
        A49 !== A57 && A49 !== A67 && A49 !== A58 && A49 !== A68) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 51
    if (A51 !== A52 && A51 !== A53 && A51 !== A54 && A51 !== A55 && A51 !== A56 && A51 !== A57 && A51 !== A58 && A51 !== A59 &&
        A51 !== A11 && A51 !== A21 && A51 !== A31 && A51 !== A41 && A51 !== A61 && A51 !== A71 && A51 !== A81 && A51 !== A91 &&
        A51 !== A42 && A51 !== A62 && A51 !== A43 && A51 !== A63) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 52
    if (A52 !== A51 && A52 !== A53 && A52 !== A54 && A52 !== A55 && A52 !== A56 && A52 !== A57 && A52 !== A58 && A52 !== A59 &&
        A52 !== A12 && A52 !== A22 && A52 !== A32 && A52 !== A42 && A52 !== A62 && A52 !== A72 && A52 !== A82 && A52 !== A92 &&
        A52 !== A41 && A52 !== A61 && A52 !== A43 && A52 !== A63) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 53
    if (A53 !== A51 && A53 !== A52 && A53 !== A54 && A53 !== A55 && A53 !== A56 && A53 !== A57 && A53 !== A58 && A53 !== A59 &&
        A53 !== A13 && A53 !== A23 && A53 !== A33 && A53 !== A43 && A53 !== A63 && A53 !== A73 && A53 !== A83 && A53 !== A93 &&
        A53 !== A41 && A53 !== A61 && A53 !== A42 && A53 !== A62) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 54
    if (A54 !== A51 && A54 !== A52 && A54 !== A53 && A54 !== A55 && A54 !== A56 && A54 !== A57 && A54 !== A58 && A54 !== A59 &&
        A54 !== A14 && A54 !== A24 && A54 !== A34 && A54 !== A44 && A54 !== A64 && A54 !== A74 && A54 !== A84 && A54 !== A94 &&
        A54 !== A45 && A54 !== A65 && A54 !== A46 && A54 !== A66) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 55
    if (A55 !== A51 && A55 !== A52 && A55 !== A53 && A55 !== A54 && A55 !== A56 && A55 !== A57 && A55 !== A58 && A55 !== A59 &&
        A55 !== A15 && A55 !== A25 && A55 !== A35 && A55 !== A45 && A55 !== A65 && A55 !== A75 && A55 !== A85 && A55 !== A95 &&
        A55 !== A44 && A55 !== A64 && A55 !== A46 && A55 !== A66) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 56
    if (A56 !== A51 && A56 !== A52 && A56 !== A53 && A56 !== A54 && A56 !== A55 && A56 !== A57 && A56 !== A58 && A56 !== A59 &&
        A56 !== A16 && A56 !== A26 && A56 !== A36 && A56 !== A46 && A56 !== A66 && A56 !== A76 && A56 !== A86 && A56 !== A96 &&
        A56 !== A44 && A56 !== A64 && A56 !== A45 && A56 !== A65) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 57
    if (A57 !== A51 && A57 !== A52 && A57 !== A53 && A57 !== A54 && A57 !== A55 && A57 !== A56 && A57 !== A58 && A57 !== A59 &&
        A57 !== A17 && A57 !== A27 && A57 !== A37 && A57 !== A47 && A57 !== A67 && A57 !== A77 && A57 !== A87 && A57 !== A97 &&
        A57 !== A48 && A57 !== A68 && A57 !== A49 && A57 !== A69) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 58
    if (A58 !== A51 && A58 !== A52 && A58 !== A53 && A58 !== A54 && A58 !== A55 && A58 !== A56 && A58 !== A57 && A58 !== A59 &&
        A58 !== A18 && A58 !== A28 && A58 !== A38 && A58 !== A48 && A58 !== A68 && A58 !== A78 && A58 !== A88 && A58 !== A98 &&
        A58 !== A47 && A58 !== A67 && A58 !== A49 && A58 !== A69) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 59
    if (A59 !== A51 && A59 !== A52 && A59 !== A53 && A59 !== A54 && A59 !== A55 && A59 !== A56 && A59 !== A57 && A59 !== A58 &&
        A59 !== A19 && A59 !== A29 && A59 !== A39 && A59 !== A49 && A59 !== A69 && A59 !== A79 && A59 !== A89 && A59 !== A99 &&
        A59 !== A47 && A59 !== A67 && A59 !== A48 && A59 !== A68) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 61
    if (A61 !== A62 && A61 !== A63 && A61 !== A64 && A61 !== A65 && A61 !== A66 && A61 !== A67 && A61 !== A68 && A61 !== A69 &&
        A61 !== A11 && A61 !== A21 && A61 !== A31 && A61 !== A41 && A61 !== A51 && A61 !== A71 && A61 !== A81 && A61 !== A91 &&
        A61 !== A42 && A61 !== A52 && A61 !== A43 && A61 !== A53) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 62
    if (A62 !== A61 && A62 !== A63 && A62 !== A64 && A62 !== A65 && A62 !== A66 && A62 !== A67 && A62 !== A68 && A62 !== A69 &&
        A62 !== A12 && A62 !== A22 && A62 !== A32 && A62 !== A42 && A62 !== A52 && A62 !== A72 && A62 !== A82 && A62 !== A92 &&
        A62 !== A41 && A62 !== A51 && A62 !== A43 && A62 !== A53) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 63
    if (A63 !== A61 && A63 !== A62 && A63 !== A64 && A63 !== A65 && A63 !== A66 && A63 !== A67 && A63 !== A68 && A63 !== A69 &&
        A63 !== A13 && A63 !== A23 && A63 !== A33 && A63 !== A43 && A63 !== A53 && A63 !== A73 && A63 !== A83 && A63 !== A93 &&
        A63 !== A41 && A63 !== A51 && A63 !== A42 && A63 !== A52) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 64
    if (A64 !== A61 && A64 !== A62 && A64 !== A63 && A64 !== A65 && A64 !== A66 && A64 !== A67 && A64 !== A68 && A64 !== A69 &&
        A64 !== A14 && A64 !== A24 && A64 !== A34 && A64 !== A44 && A64 !== A54 && A64 !== A74 && A64 !== A84 && A64 !== A94 &&
        A64 !== A45 && A64 !== A55 && A64 !== A46 && A64 !== A56) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 65
    if (A65 !== A61 && A65 !== A62 && A65 !== A63 && A65 !== A64 && A65 !== A66 && A65 !== A67 && A65 !== A68 && A65 !== A69 &&
        A65 !== A15 && A65 !== A25 && A65 !== A35 && A65 !== A45 && A65 !== A55 && A65 !== A75 && A65 !== A85 && A65 !== A95 &&
        A65 !== A44 && A65 !== A54 && A65 !== A46 && A65 !== A56) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 66
    if (A66 !== A61 && A66 !== A62 && A66 !== A63 && A66 !== A64 && A66 !== A65 && A66 !== A67 && A66 !== A68 && A66 !== A69 &&
        A66 !== A16 && A66 !== A26 && A66 !== A36 && A66 !== A46 && A66 !== A56 && A66 !== A76 && A66 !== A86 && A66 !== A96 &&
        A66 !== A44 && A66 !== A54 && A66 !== A45 && A66 !== A55) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 67
    if (A67 !== A61 && A67 !== A62 && A67 !== A63 && A67 !== A64 && A67 !== A65 && A67 !== A66 && A67 !== A68 && A67 !== A69 &&
        A67 !== A17 && A67 !== A27 && A67 !== A37 && A67 !== A47 && A67 !== A57 && A67 !== A77 && A67 !== A87 && A67 !== A97 &&
        A67 !== A48 && A67 !== A58 && A67 !== A49 && A67 !== A59) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 68
    if (A68 !== A61 && A68 !== A62 && A68 !== A63 && A68 !== A64 && A68 !== A65 && A68 !== A66 && A68 !== A69 && A68 !== A69 &&
        A68 !== A18 && A68 !== A28 && A68 !== A38 && A68 !== A48 && A68 !== A58 && A68 !== A78 && A68 !== A88 && A68 !== A98 &&
        A68 !== A47 && A68 !== A57 && A68 !== A49 && A68 !== A59) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 69
    if (A69 !== A61 && A69 !== A62 && A69 !== A63 && A69 !== A64 && A69 !== A65 && A69 !== A66 && A69 !== A69 && A69 !== A68 &&
        A69 !== A19 && A69 !== A29 && A69 !== A39 && A69 !== A49 && A69 !== A59 && A69 !== A79 && A69 !== A89 && A69 !== A99 &&
        A69 !== A47 && A69 !== A57 && A69 !== A48 && A69 !== A58) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 71
    if (A71 !== A72 && A71 !== A73 && A71 !== A74 && A71 !== A75 && A71 !== A76 && A71 !== A77 && A71 !== A78 && A71 !== A79 &&
        A71 !== A11 && A71 !== A21 && A71 !== A31 && A71 !== A41 && A71 !== A51 && A71 !== A61 && A71 !== A81 && A71 !== A91 &&
        A71 !== A82 && A71 !== A92 && A71 !== A83 && A71 !== A93) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 72
    if (A72 !== A71 && A72 !== A73 && A72 !== A74 && A72 !== A75 && A72 !== A76 && A72 !== A77 && A72 !== A78 && A72 !== A79 &&
        A72 !== A12 && A72 !== A22 && A72 !== A32 && A72 !== A42 && A72 !== A52 && A72 !== A62 && A72 !== A82 && A72 !== A92 &&
        A72 !== A81 && A72 !== A91 && A72 !== A83 && A72 !== A93) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 73
    if (A73 !== A71 && A73 !== A72 && A73 !== A74 && A73 !== A75 && A73 !== A76 && A73 !== A77 && A73 !== A78 && A73 !== A79 &&
        A73 !== A13 && A73 !== A23 && A73 !== A33 && A73 !== A43 && A73 !== A53 && A73 !== A63 && A73 !== A83 && A73 !== A93 &&
        A73 !== A81 && A73 !== A91 && A73 !== A82 && A73 !== A92) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 74
    if (A74 !== A71 && A74 !== A72 && A74 !== A73 && A74 !== A75 && A74 !== A76 && A74 !== A77 && A74 !== A78 && A74 !== A79 &&
        A74 !== A14 && A74 !== A24 && A74 !== A34 && A74 !== A44 && A74 !== A54 && A74 !== A64 && A74 !== A84 && A74 !== A94 &&
        A74 !== A85 && A74 !== A95 && A74 !== A86 && A74 !== A96) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 75
    if (A75 !== A71 && A75 !== A72 && A75 !== A73 && A75 !== A74 && A75 !== A76 && A75 !== A77 && A75 !== A78 && A75 !== A79 &&
        A75 !== A15 && A75 !== A25 && A75 !== A35 && A75 !== A45 && A75 !== A55 && A75 !== A65 && A75 !== A85 && A75 !== A95 &&
        A75 !== A84 && A75 !== A94 && A75 !== A86 && A75 !== A96) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 76
    if (A76 !== A71 && A76 !== A72 && A76 !== A73 && A76 !== A74 && A76 !== A75 && A76 !== A77 && A76 !== A78 && A76 !== A79 &&
        A76 !== A16 && A76 !== A26 && A76 !== A36 && A76 !== A46 && A76 !== A56 && A76 !== A66 && A76 !== A86 && A76 !== A96 &&
        A76 !== A84 && A76 !== A94 && A76 !== A85 && A76 !== A95) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 77
    if (A77 !== A71 && A77 !== A72 && A77 !== A73 && A77 !== A74 && A77 !== A75 && A77 !== A76 && A77 !== A78 && A77 !== A79 &&
        A77 !== A17 && A77 !== A27 && A77 !== A37 && A77 !== A47 && A77 !== A57 && A77 !== A67 && A77 !== A87 && A77 !== A97 &&
        A77 !== A88 && A77 !== A98 && A77 !== A89 && A77 !== A99) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 78
    if (A78 !== A71 && A78 !== A72 && A78 !== A73 && A78 !== A74 && A78 !== A75 && A78 !== A76 && A78 !== A77 && A78 !== A79 &&
        A78 !== A18 && A78 !== A28 && A78 !== A38 && A78 !== A48 && A78 !== A58 && A78 !== A68 && A78 !== A88 && A78 !== A98 &&
        A78 !== A87 && A78 !== A97 && A78 !== A89 && A78 !== A99) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 79
    if (A79 !== A71 && A79 !== A72 && A79 !== A73 && A79 !== A74 && A79 !== A75 && A79 !== A76 && A79 !== A77 && A79 !== A78 &&
        A79 !== A19 && A79 !== A29 && A79 !== A39 && A79 !== A49 && A79 !== A59 && A79 !== A69 && A79 !== A89 && A79 !== A99 &&
        A79 !== A87 && A79 !== A97 && A79 !== A88 && A79 !== A98) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 81
    if (A81 !== A82 && A81 !== A83 && A81 !== A84 && A81 !== A85 && A81 !== A86 && A81 !== A87 && A81 !== A88 && A81 !== A89 &&
        A81 !== A11 && A81 !== A21 && A81 !== A31 && A81 !== A41 && A81 !== A51 && A81 !== A61 && A81 !== A71 && A81 !== A91 &&
        A81 !== A72 && A81 !== A92 && A81 !== A73 && A81 !== A93) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 82
    if (A82 !== A81 && A82 !== A83 && A82 !== A84 && A82 !== A85 && A82 !== A86 && A82 !== A87 && A82 !== A88 && A82 !== A89 &&
        A82 !== A12 && A82 !== A22 && A82 !== A32 && A82 !== A42 && A82 !== A52 && A82 !== A62 && A82 !== A72 && A82 !== A92 &&
        A82 !== A71 && A82 !== A91 && A82 !== A73 && A82 !== A93) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 83
    if (A83 !== A81 && A83 !== A82 && A83 !== A84 && A83 !== A85 && A83 !== A86 && A83 !== A87 && A83 !== A88 && A83 !== A89 &&
        A83 !== A13 && A83 !== A23 && A83 !== A33 && A83 !== A43 && A83 !== A53 && A83 !== A63 && A83 !== A73 && A83 !== A93 &&
        A83 !== A71 && A83 !== A91 && A83 !== A72 && A83 !== A92) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 84
    if (A84 !== A81 && A84 !== A82 && A84 !== A83 && A84 !== A85 && A84 !== A86 && A84 !== A87 && A84 !== A88 && A84 !== A89 &&
        A84 !== A14 && A84 !== A24 && A84 !== A34 && A84 !== A44 && A84 !== A54 && A84 !== A64 && A84 !== A74 && A84 !== A94 &&
        A84 !== A75 && A84 !== A95 && A84 !== A76 && A84 !== A96) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 85
    if (A85 !== A81 && A85 !== A82 && A85 !== A83 && A85 !== A84 && A85 !== A86 && A85 !== A87 && A85 !== A88 && A85 !== A89 &&
        A85 !== A15 && A85 !== A25 && A85 !== A35 && A85 !== A45 && A85 !== A55 && A85 !== A65 && A85 !== A75 && A85 !== A95 &&
        A85 !== A74 && A85 !== A94 && A85 !== A76 && A85 !== A96) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 86
    if (A86 !== A81 && A86 !== A82 && A86 !== A83 && A86 !== A84 && A86 !== A85 && A86 !== A87 && A86 !== A88 && A86 !== A89 &&
        A86 !== A16 && A86 !== A26 && A86 !== A36 && A86 !== A46 && A86 !== A56 && A86 !== A66 && A86 !== A76 && A86 !== A96 &&
        A86 !== A74 && A86 !== A94 && A86 !== A75 && A86 !== A95) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 87
    if (A87 !== A81 && A87 !== A82 && A87 !== A83 && A87 !== A84 && A87 !== A85 && A87 !== A86 && A87 !== A88 && A87 !== A89 &&
        A87 !== A17 && A87 !== A27 && A87 !== A37 && A87 !== A47 && A87 !== A57 && A87 !== A67 && A87 !== A77 && A87 !== A97 &&
        A87 !== A78 && A87 !== A98 && A87 !== A79 && A87 !== A99) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 88
    if (A88 !== A81 && A88 !== A82 && A88 !== A83 && A88 !== A84 && A88 !== A85 && A88 !== A86 && A88 !== A87 && A88 !== A89 &&
        A88 !== A18 && A88 !== A28 && A88 !== A38 && A88 !== A48 && A88 !== A58 && A88 !== A68 && A88 !== A78 && A88 !== A98 &&
        A88 !== A77 && A88 !== A97 && A88 !== A79 && A88 !== A99) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 89
    if (A89 !== A81 && A89 !== A82 && A89 !== A83 && A89 !== A84 && A89 !== A85 && A89 !== A86 && A89 !== A87 && A89 !== A88 &&
        A89 !== A19 && A89 !== A29 && A89 !== A39 && A89 !== A49 && A89 !== A59 && A89 !== A69 && A89 !== A79 && A89 !== A99 &&
        A89 !== A77 && A89 !== A97 && A89 !== A78 && A89 !== A98) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 91
    if (A91 !== A92 && A91 !== A93 && A91 !== A94 && A91 !== A95 && A91 !== A96 && A91 !== A97 && A91 !== A98 && A91 !== A99 &&
        A91 !== A11 && A91 !== A21 && A91 !== A31 && A91 !== A41 && A91 !== A51 && A91 !== A61 && A91 !== A71 && A91 !== A81 &&
        A91 !== A72 && A91 !== A82 && A91 !== A73 && A91 !== A83) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 92
    if (A92 !== A91 && A92 !== A93 && A92 !== A94 && A92 !== A95 && A92 !== A96 && A92 !== A97 && A92 !== A98 && A92 !== A99 &&
        A92 !== A12 && A92 !== A22 && A92 !== A32 && A92 !== A42 && A92 !== A52 && A92 !== A62 && A92 !== A72 && A92 !== A82 &&
        A92 !== A71 && A92 !== A81 && A92 !== A73 && A92 !== A83) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 93
    if (A93 !== A91 && A93 !== A92 && A93 !== A94 && A93 !== A95 && A93 !== A96 && A93 !== A97 && A93 !== A98 && A93 !== A99 &&
        A93 !== A13 && A93 !== A23 && A93 !== A33 && A93 !== A43 && A93 !== A53 && A93 !== A63 && A93 !== A73 && A93 !== A83 &&
        A93 !== A71 && A93 !== A81 && A93 !== A72 && A93 !== A82) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 94
    if (A94 !== A91 && A94 !== A92 && A94 !== A93 && A94 !== A95 && A94 !== A96 && A94 !== A97 && A94 !== A98 && A94 !== A99 &&
        A94 !== A14 && A94 !== A24 && A94 !== A34 && A94 !== A44 && A94 !== A54 && A94 !== A64 && A94 !== A74 && A94 !== A84 &&
        A94 !== A75 && A94 !== A85 && A94 !== A76 && A94 !== A86) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 95
    if (A95 !== A91 && A95 !== A92 && A95 !== A93 && A95 !== A94 && A95 !== A96 && A95 !== A97 && A95 !== A98 && A95 !== A99 &&
        A95 !== A15 && A95 !== A25 && A95 !== A35 && A95 !== A45 && A95 !== A55 && A95 !== A65 && A95 !== A75 && A95 !== A85 &&
        A95 !== A74 && A95 !== A84 && A95 !== A76 && A95 !== A86) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 96
    if (A96 !== A91 && A96 !== A92 && A96 !== A93 && A96 !== A94 && A96 !== A95 && A96 !== A97 && A96 !== A98 && A96 !== A99 &&
        A96 !== A16 && A96 !== A26 && A96 !== A36 && A96 !== A46 && A96 !== A56 && A96 !== A66 && A96 !== A76 && A96 !== A86 &&
        A96 !== A74 && A96 !== A84 && A96 !== A75 && A96 !== A85) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 97
    if (A97 !== A91 && A97 !== A92 && A97 !== A93 && A97 !== A94 && A97 !== A95 && A97 !== A96 && A97 !== A98 && A97 !== A99 &&
        A97 !== A17 && A97 !== A27 && A97 !== A37 && A97 !== A47 && A97 !== A57 && A97 !== A67 && A97 !== A77 && A97 !== A87 &&
        A97 !== A78 && A97 !== A88 && A97 !== A79 && A97 !== A89) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 98
    if (A98 !== A91 && A98 !== A92 && A98 !== A93 && A98 !== A94 && A98 !== A95 && A98 !== A96 && A98 !== A97 && A98 !== A99 &&
        A98 !== A18 && A98 !== A28 && A98 !== A38 && A98 !== A48 && A98 !== A58 && A98 !== A68 && A98 !== A78 && A98 !== A88 &&
        A98 !== A77 && A98 !== A87 && A98 !== A79 && A98 !== A89) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }

    // 99
    if (A99 !== A91 && A99 !== A92 && A99 !== A93 && A99 !== A94 && A99 !== A95 && A99 !== A96 && A99 !== A97 && A99 !== A98 &&
        A99 !== A19 && A99 !== A29 && A99 !== A39 && A99 !== A49 && A99 !== A59 && A99 !== A69 && A99 !== A79 && A99 !== A89 &&
        A99 !== A77 && A99 !== A87 && A99 !== A78 && A99 !== A88) {
    }
    else {
        alert("Duplicate Value Not Allow")
    }



}