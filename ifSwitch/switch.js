
            var fruit = "사과";
            var price;
            switch(fruit){ 
                case "바나나":
                    price = 200;
                    break;
                case "사과":
                    price = 300;
                    break;
                case "체리":
                    price = 400;
                    break;
                default:
                    document.write("팔지 않습니다.");
                    price = 0;
            }
            console.log(`${fruit}은 ${price}원 입니다.`);
 




