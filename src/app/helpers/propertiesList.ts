import { Property } from '../models/PropertyDiet';
import * as moment from 'moment';

export const propertiesList: Property[] = [
  {
    propertyId: 1,
    propertyType: 'Dieta standardowa',
    propertyAddress: 'Dieta Optimum',
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_standard.png',
    price: 45.90,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 1))
    ).fromNow(),
    propertyShortDescription: "Chcesz zmienić lub ustabilizować swój sposób żywienia? Jesz niezdrowe posiłki i brak Ci energii?",
    propertyLongDescription:
      "Zbilansowana i różnorodna dieta, dla osoby dbającej o zdrowie i kondycję. Od dobranej kaloryczności zależy efekt jaki uzyskamy — spadek, wzrost lub utrzymanie obecnej masy ciała. Do wyboru kaloryczności: 1200 / 1500 / 1800 / 2000 kcal"
  },
  {
    propertyId: 2,
    propertyType: 'Dieta specjalna',
    propertyAddress: 'Dieta Lactose Free',
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_lactose free.png',
    price: 50.90,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 2))
    ).fromNow(),
    propertyShortDescription: "Dieta stworzona z myślą o osobach z nietolerancją laktozy lub uczulonych na produkty mleczne.",
    propertyLongDescription:
      "Wykorzystujemy w niej produkty mleczne bez laktozy oraz roślinne zamienniki.",
  },
  {
    propertyId: 3,
    propertyType: 'Dieta specjalna',
    propertyAddress: "Dieta Vege",
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_dwege.png',
    price: 49.90,
    timeAdded: moment(new Date()).fromNow(),
    propertyShortDescription: "Jesteś na diecie wegetariańskiej i chcesz zadbać o to, aby Twój organizm otrzymał wszystkie niezbędne składniki odżywcze?",
    propertyLongDescription:
      "Dieta bez mięsa i ryb, zawiera jednak jajka i produkty mleczne. Brak mięsa rekompensujemy roślinami strączkowymi i nabiałem, nie tracąc na różnorodności i smaku. Dostępna we wszystkich opcjach kalorycznych."
  },
  {
    propertyId: 4,
    propertyType: 'Dieta specjalna',
    propertyAddress: "Dieta Low IG",
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_low ig.png',
    price: 53.90,
    timeAdded: moment(new Date()).fromNow(),
    propertyShortDescription: "Jesteś na diecie wegetariańskiej i chcesz zadbać o to, aby Twój organizm otrzymał wszystkie niezbędne składniki odżywcze?",
    propertyLongDescription:
      "Dieta oparta na produktach o niskim i średnim indeksie glikemicznym, czyli takich, które nie podnoszą mocno poziomu glukozy we krwi, skierowana m.in. dla osób z cukrzycą i insulinoopornością. Dostępna we wszystkich opcjach kalorycznych.",
  },
  {
    propertyId: 5,
    propertyType: 'Dieta standardowa',
    propertyAddress: "Dieta Vege+Fish",
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_wege+ryba.png',
    price: 52.90,
    timeAdded: moment(new Date()).fromNow(),
    propertyShortDescription: "Jesteś na diecie wegetariańskiej i chcesz zadbać o to, aby Twój organizm otrzymał wszystkie niezbędne składniki odżywcze?",
    propertyLongDescription:
      "Dieta bez mięsa, ale z uwzględnieniem ryb, czyli rozszerzona wersja diety Wege. Odpowiednio zbilansowana, aby dostarczała wszystkich niezbędnych składników odżywczych.",
  },
  {
    propertyId: 6,
    propertyType: 'Dieta specjalna',
    propertyAddress: 'Dieta Gluten Free',
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_gluten free.png',
    price: 50.90,
    timeAdded: moment(
      new Date(new Date().setDate(new Date().getDate() - 2))
    ).fromNow(),
    propertyShortDescription: "Jesteś sportowcem lub aktywność fizyczna jest Twoim hobby?",
    propertyLongDescription:
      "Dieta eliminująca produkty zawierające gluten, idealna dla osób nietolerujących glutenu oraz chcących wykluczyć ze swojej diety pszenicę. Znajdziesz tu produkty ze zbóż niezawierających glutenu."
  },
  {
    propertyId: 7,
    propertyType: 'Dieta specjalna',
    propertyAddress: "Dieta Active",
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_active.png',
    price: 47.90,
    timeAdded: moment(new Date()).fromNow(),
    propertyShortDescription: "Jesteś na diecie wegetariańskiej i chcesz zadbać o to, aby Twój organizm otrzymał wszystkie niezbędne składniki odżywcze?",
    propertyLongDescription:
      "Dieta bez mięsa, ale z uwzględnieniem ryb, czyli rozszerzona wersja diety Wege. Odpowiednio zbilansowana, aby dostarczała wszystkich niezbędnych składników odżywczych.",
  },
  {
    propertyId: 8,
    propertyType: 'Dieta specjalna',
    propertyAddress: "Dieta Detox",
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_detox.png',
    price: 48.90,
    timeAdded: moment(new Date()).fromNow(),
    propertyShortDescription: "Jesteś na diecie wegetariańskiej i chcesz zadbać o to, aby Twój organizm otrzymał wszystkie niezbędne składniki odżywcze?",
    propertyLongDescription:
      "Dieta bez mięsa, ale z uwzględnieniem ryb, czyli rozszerzona wersja diety Wege. Odpowiednio zbilansowana, aby dostarczała wszystkich niezbędnych składników odżywczych.",
  },
  {
    propertyId: 9,
    propertyType: 'Dieta specjalna',
    propertyAddress: "Dieta Indywidualna",
    propertyImageUrl: '../../assets/catering_food_photos/png/dieta_indywidualna.png',
    price: 56.90,
    timeAdded: moment(new Date()).fromNow(),
    propertyShortDescription: "Jesteś na diecie wegetariańskiej i chcesz zadbać o to, aby Twój organizm otrzymał wszystkie niezbędne składniki odżywcze?",
    propertyLongDescription:
      "Dieta bez mięsa, ale z uwzględnieniem ryb, czyli rozszerzona wersja diety Wege. Odpowiednio zbilansowana, aby dostarczała wszystkich niezbędnych składników odżywczych.",
  }
];
