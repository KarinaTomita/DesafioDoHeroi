//variaveis
// const
const nome = ("heroina Chocobita")
//var
var xp  = (7777)
var nivel 

// pros

if (xp <= 1000){
    nivel = "Ferro"
} 
else {
    if (xp >= 1001 & xp <= 2000){
    nivel = "Bronze"
    }
    else{
        if (xp >= 2001 & xp <= 5000){
            nivel = "Prata"
        }
        else{
            if (xp >=5001 & xp <= 7000){
                nivel = "ouro"
            }
            else{
            if (xp >=7001 & xp <= 8000){
                nivel = "Platina"
            }
            else{
                if (xp >=8001 & xp <=9000){
                    nivel = "Ascendente" 
                    }
                    else {
                        if (xp >= 9001 & xp <= 10000 ){
                            nivel = "Imortal"
                        }
                        else {
                                nivel = "Radiante"
                        }
                    }
                }
            }
            }
        }

    }


//output

console.log ( ("O Herói de nome") + nome + ("está no nível de") + nivel)
