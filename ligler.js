// TAKIMLARI BURADAN DÜZENLE. Dosyayı UTF-8 olarak kaydet.
// Logo ve MP3 dosyaları index.html ile aynı klasörde: bjk-logo.png / bjk-gol.mp3
// Her lige takimlar içine yeni bir anahtar ekle. UCL / UEL bölümleri hazır ve boştur.
// Oyuncular alanı saklanır; bu oyunda takım gücüne etki etmez.
const LIGLER = {
  // 🇹🇷 Türkiye Süper Lig
  "superlig": {
    "isim": "🇹🇷 Türkiye Süper Lig",
    "takimlar": {
      "fb": {
        "isim": "FENERBAHÇE",
        "logo": "./fb-logo.png",
        "muzik": "fb-gol.mp3",
        "renkAna": "#FBED11",
        "renkIkinci": "#000044",
        "kazandiYazisi": "💛💙 FENERBAHÇE KAZANDI!",
        "oyuncular": [
          "Kerem",
          "Asensio",
          "Kante",
          "Guendouzi",
          "Lukaku",
          "Vedat Muriqi",
          "Greenwood",
          "Ake"
        ],
        "kisaltma": "FB"
      },
      "bjk": {
        "isim": "BEŞİKTAŞ",
        "logo": "./bjk-logo.png",
        "muzik": "bjk-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#222222",
        "kazandiYazisi": "🦅 BEŞİKTAŞ KAZANDI!",
        "oyuncular": [
          "Orkun",
          "Trossard",
          "Murillo",
          "Miretti",
          "Djalo",
          "Oh",
          "Vlahovic",
          "Salih",
          "Poku"
        ],
        "kisaltma": "BJK"
      },
      "gs": {
        "isim": "GALATASARAY",
        "logo": "./gs-logo.png",
        "muzik": "gs-gol.mp3",
        "renkAna": "#A90432",
        "renkIkinci": "#FDB912",
        "kazandiYazisi": "❤️💛 GALATASARAY KAZANDI!",
        "oyuncular": [
          "Yunus",
          "Ugochukwu",
          "Barış",
          "Torreira",
          "Sane",
          "Sanchez",
          "Leao",
          "Sara",
          "Batrakov",
          "Sallai"
        ],
        "kisaltma": "GS"
      },
      "ts": {
        "isim": "TRABZONSPOR",
        "logo": "./ts-logo.png",
        "muzik": "ts-gol.mp3",
        "renkAna": "#8C0B29",
        "renkIkinci": "#45B2E6",
        "kazandiYazisi": "❤️💙 TRABZONSPOR KAZANDI!",
        "oyuncular": [
          "Salah",
          "Pina",
          "Aral",
          "Bouchouari",
          "Malinovskyi",
          "Saviolo",
          "Onuachu",
          "Nwaiwu"
        ],
        "kisaltma": "TS"
      },
      "kasimpasa": {
        "isim": "KASIMPAŞA",
        "logo": "./kasimpasa-logo.png",
        "muzik": "kasimpasa-gol.mp3",
        "renkAna": "#000055",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ KASIMPAŞA KAZANDI!",
        "oyuncular": [
          "Bededyzcak",
          "Arous",
          "Ilie",
          "Frimpong",
          "Ben Ouanes",
          "Güven Yalçın",
          "Baldursson"
        ]
      },
      "goztepe": {
        "isim": "GÖZTEPE",
        "logo": "./goztepe-logo.png",
        "muzik": "goztepe-gol.mp3",
        "renkAna": "#ED1C24",
        "renkIkinci": "#FFD700",
        "kazandiYazisi": "🔴🟡 GÖZTEPE KAZANDI!",
        "oyuncular": [
          "Arda Okan",
          "Juan",
          "Henrique",
          "Janderson",
          "Cherni",
          "Bokele",
          "Miroshi",
          "Efkan Bekiroğlu"
        ]
      },
      "alanyaspor": {
        "isim": "ALANYASPOR",
        "logo": "./alanyaspor-logo.png",
        "muzik": "alanyaspor-gol.mp3",
        "renkAna": "#F9A800",
        "renkIkinci": "#008751",
        "kazandiYazisi": "🟠🟢 ALANYASPOR KAZANDI!",
        "oyuncular": [
          "Maestro",
          "Ümit Akdağ",
          "Yusuf Özdemir",
          "Makouta",
          "Ruan",
          "Lima",
          "Hagi",
          "Elia"
        ]
      },
      "konyaspor": {
        "isim": "KONYASPOR",
        "logo": "./konyaspor-logo.png",
        "muzik": "konyaspor-gol.mp3",
        "renkAna": "#006400",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🟢⚪ KONYASPOR KAZANDI!",
        "oyuncular": [
          "Adil Demirbağ",
          "Gonçalves",
          "Bardhi",
          "Muleka",
          "Masauku",
          "Melih",
          "Kramer",
          "Luc Dompe"
        ]
      },
      "rizespor": {
        "isim": "ÇAYKUR RİZESPOR",
        "logo": "./rizespor-logo.png",
        "muzik": "rizespor-gol.mp3",
        "renkAna": "#00529F",
        "renkIkinci": "#008000",
        "kazandiYazisi": "🔵🟢 RİZESPOR KAZANDI!",
        "oyuncular": [
          "Laci",
          "Sowe",
          "Mihaila",
          "Ahmet Kutucu",
          "Bakayoko",
          "Mebude",
          "Taha Şahin",
          "Olawoyin"
        ]
      },
      "samsunspor": {
        "isim": "SAMSUNSPOR",
        "logo": "./samsunspor-logo.png",
        "muzik": "samsunspor-gol.mp3",
        "renkAna": "#E32219",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ SAMSUNSPOR KAZANDI!",
        "oyuncular": [
          "Mouandilmadji",
          "Sekongo",
          "Guarino",
          "Watt",
          "Afonso Sousa",
          "Borevkovic",
          "Øhlenschlæger"
        ]
      },
      "eyupspor": {
        "isim": "EYÜPSPOR",
        "logo": "./eyupspor-logo.png",
        "muzik": "eyupspor-gol.mp3",
        "renkAna": "#4B0082",
        "renkIkinci": "#FFD700",
        "kazandiYazisi": "🟣🟡 EYÜPSPOR KAZANDI!",
        "oyuncular": [
          "Calegari",
          "Boutobba",
          "Sabiri",
          "Barası",
          "Abdullahi",
          "Raux-Yao",
          "Michalak"
        ]
      },
      "gaziantep": {
        "isim": "GAZİANTEP FK",
        "logo": "./gaziantep-logo.png",
        "muzik": "gaziantep-gol.mp3",
        "renkAna": "#E32219",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ GAZİANTEP FK KAZANDI!",
        "oyuncular": [
          "Kozlowski",
          "Camara",
          "Bacuna",
          "Sorescu",
          "Meleke",
          "Stewart",
          "Perez",
          "Hansen"
        ]
      },
      "corumfk": {
        "isim": "ÇORUM FK",
        "logo": "./corumfk-logo.png",
        "muzik": "corumfk-gol.mp3",
        "renkAna": "#000000",
        "renkIkinci": "#ED1C24",
        "kazandiYazisi": "🔴⚫ ÇORUM FK KAZANDI!",
        "oyuncular": [
          "Penetra",
          "Diomande",
          "Ramirez",
          "Cengiz Ünder",
          "Kyziridis",
          "Borza",
          "Smolcic",
          "Göktan Gürpüz"
        ]
      },
      "erzurumspor": {
        "isim": "ERZURUMSPOR",
        "logo": "./erzurumspor-logo.png",
        "muzik": "erzurumspor-gol.mp3",
        "renkAna": "#00529F",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ ERZURUMSPOR KAZANDI!",
        "oyuncular": [
          "Owusu",
          "Kerk",
          "Ebosele",
          "Akhundzada",
          "Cardoso",
          "Diabate",
          "Baiye"
        ]
      },
      "amed": {
        "isim": "amed",
        "logo": "./amed-logo.png",
        "muzik": "amed-gol.mp3",
        "renkAna": "#008000",
        "renkIkinci": "#ED1C24",
        "kazandiYazisi": "🟢🔴 amed KAZANDI!",
        "oyuncular": [
          "Orban",
          "Sor",
          "Ballet",
          "Bates",
          "Krasniqi",
          "Lutin",
          "Dellova"
        ]
      },
      "genclerbirligi": {
        "isim": "GENÇLERBİRLİĞİ",
        "logo": "./genclerbirligi-logo.png",
        "muzik": "genclerbirligi-gol.mp3",
        "renkAna": "#ED1C24",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ GENÇLERBİRLİĞİ KAZANDI!",
        "oyuncular": [
          "Gouveia",
          "Koita",
          "Tongya",
          "Niasse",
          "Traore",
          "Metehan Baltacı"
        ]
      },
      "basaksehir": {
        "isim": "BAŞAKŞEHİR",
        "logo": "./basaksehir-logo.png",
        "muzik": "basaksehir-gol.mp3",
        "renkAna": "#F47321",
        "renkIkinci": "#002A54",
        "kazandiYazisi": "🟠🔵 BAŞAKŞEHİR KAZANDI!",
        "oyuncular": [
          "Shomurodov",
          "Olsen",
          "Opuku",
          "Operi",
          "Bertuğ",
          "Yusuf Sarı",
          "Fayzullaev",
          "Kemen"
        ]
      },
      "kocaeli": {
        "isim": "KOCAELİSPOR",
        "logo": "./kocaeli-logo.png",
        "muzik": "kocaeli-gol.mp3",
        "renkAna": "#008037",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🟢⚫ KOCAELİSPOR KAZANDI!",
        "oyuncular": [
          "Berkan",
          "Petkovic",
          "Keita",
          "Show",
          "Rivas",
          "Aye",
          "Dijksteel",
          "Agyei"
        ]
      }
    }
  },
  // 🏴 Premier League
  "premierleague": {
    "isim": "🏴 Premier League",
    "takimlar": {
      "arsenal": {
        "isim": "ARSENAL",
        "logo": "./arsenal-logo.png",
        "muzik": "arsenal-gol.mp3",
        "renkAna": "#EF0107",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ ARSENAL KAZANDI!",
        "oyuncular": [
          "Saka",
          "Odegaard",
          "Rice",
          "Saliba",
          "Gabriel",
          "Martinelli",
          "Havertz",
          "Zubimendi",
          "Gyökeres"
        ],
        "kisaltma": "ARS"
      },
      "mancity": {
        "isim": "MANCHESTER CITY",
        "logo": "./mancity-logo.png",
        "muzik": "mancity-gol.mp3",
        "renkAna": "#6CABDD",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🩵⚪ MAN CITY KAZANDI!",
        "oyuncular": [
          "Haaland",
          "Foden",
          "Rodri",
          "Semenyo",
          "Dias",
          "Marmoush",
          "Doku",
          "Cherki"
        ],
        "kisaltma": "MCI"
      },
      "manunited": {
        "isim": "MANCHESTER UNITED",
        "logo": "./manunited-logo.png",
        "muzik": "manunited-gol.mp3",
        "renkAna": "#DA291C",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ MAN UNITED KAZANDI!",
        "oyuncular": [
          "Bruno Fernandes",
          "de Light",
          "Yoro",
          "Mainoo",
          "Diallo",
          "Sesko",
          "Cunha",
          "Mbeumo"
        ],
        "kisaltma": "MUN"
      },
      "astonvilla": {
        "isim": "ASTON VILLA",
        "logo": "./astonvilla-logo.png",
        "muzik": "astonvilla-gol.mp3",
        "renkAna": "#670E36",
        "renkIkinci": "#95BFE5",
        "kazandiYazisi": "🟣🩵 ASTON VILLA KAZANDI!",
        "oyuncular": [
          "Kamara",
          "Abraham",
          "Tielemans",
          "Watkins",
          "Onana",
          "Konsa",
          "Martinez",
          "Rogers"
        ],
        "kisaltma": "AVL"
      },
      "liverpool": {
        "isim": "LIVERPOOL",
        "logo": "./liverpool-logo.png",
        "muzik": "liverpool-gol.mp3",
        "renkAna": "#C8102E",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴 LIVERPOOL KAZANDI!",
        "oyuncular": [
          "Salah",
          "Wirtz",
          "Gakpo",
          "Mac Allister",
          "Szoboszlai",
          "Van Dijk",
          "Kerkez",
          "Gravenberch",
          "Ekitike",
          "Isak"
        ],
        "kisaltma": "LIV"
      },
      "chelsea": {
        "isim": "CHELSEA",
        "logo": "./chelsea-logo.png",
        "muzik": "chelsea-gol.mp3",
        "renkAna": "#034694",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ CHELSEA KAZANDI!",
        "oyuncular": [
          "Palmer",
          "Caicedo",
          "Enzo",
          "Estevao",
          "Pedro",
          "Neto",
          "Colwill",
          "James",
          "Cucurella"
        ],
        "kisaltma": "CHE"
      },
      "tottenham": {
        "isim": "TOTTENHAM",
        "logo": "./tottenham-logo.png",
        "muzik": "tottenham-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#132257",
        "kazandiYazisi": "⚪🔵 TOTTENHAM KAZANDI!",
        "oyuncular": [
          "Kudus",
          "Xavi Simons",
          "Romero",
          "Porro",
          "Bergvall",
          "Solanke",
          "Gallagher",
          "Van de Ven",
          "Sarr"
        ],
        "kisaltma": "TOT"
      },
      "newcastle": {
        "isim": "NEWCASTLE UTD",
        "logo": "./newcastle-logo.png",
        "muzik": "newcastle-gol.mp3",
        "renkAna": "#000000",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "⚫⚪ NEWCASTLE KAZANDI!",
        "oyuncular": [
          "Tonali",
          "Woltemade",
          "Guimaraes",
          "Gordon",
          "Thiaw",
          "Elanga",
          "Botman",
          "Ramsey",
          "Hall",
          "Joelinton"
        ],
        "kisaltma": "NEW"
      },
      "westham": {
        "isim": "WEST HAM",
        "logo": "./westham-logo.png",
        "muzik": "westham-gol.mp3",
        "renkAna": "#7A263A",
        "renkIkinci": "#1BB1E7",
        "kazandiYazisi": "⚒️ WEST HAM KAZANDI!",
        "oyuncular": [
          "Bowen",
          "Fernandez",
          "Castellanos",
          "Malick Diouf",
          "Pablo",
          "Wan-Bissaka",
          "Kilman",
          "Summerville"
        ]
      },
      "brighton": {
        "isim": "BRIGHTON",
        "logo": "./brighton-logo.png",
        "muzik": "brighton-gol.mp3",
        "renkAna": "#0057B8",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ BRIGHTON KAZANDI!",
        "oyuncular": [
          "Baleba",
          "Minteh",
          "van Hecke",
          "Kadıoğlu",
          "Rutter",
          "Ayari",
          "Wieffer",
          "Mitoma",
          "Gomez",
          "Kostoulas"
        ]
      },
      "bournemouth": {
        "isim": "BOURNEMOUTH",
        "logo": "./bournemouth-logo.png",
        "muzik": "bournemouth-gol.mp3",
        "renkAna": "#B50E12",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ BOURNEMOUTH KAZANDI!",
        "oyuncular": [
          "Kroupi",
          "Rayan",
          "Evanilson",
          "Kluivert",
          "Diakite",
          "Truffert",
          "Tavernier",
          "Scott"
        ]
      },
      "fulham": {
        "isim": "FULHAM",
        "logo": "./fulham-logo.png",
        "muzik": "fulham-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#000000",
        "kazandiYazisi": "⚪⚫ FULHAM KAZANDI!",
        "oyuncular": [
          "Bobb",
          "Kevin",
          "Bassey",
          "Robinson",
          "Andersen",
          "Iwobi",
          "Berge",
          "Muniz",
          "Rowe"
        ]
      },
      "brentford": {
        "isim": "BRENTFORD",
        "logo": "./brentford-logo.png",
        "muzik": "brentford-gol.mp3",
        "renkAna": "#E30613",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ BRENTFORD KAZANDI!",
        "oyuncular": [
          "Thiago",
          "Schade",
          "Ouattara",
          "Kayode",
          "van den Berg",
          "Collins",
          "Damsgaard",
          "Yarmolyuk"
        ]
      },
      "everton": {
        "isim": "EVERTON",
        "logo": "./everton-logo.png",
        "muzik": "everton-gol.mp3",
        "renkAna": "#0033A0",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ EVERTON KAZANDI!",
        "oyuncular": [
          "Ndiaye",
          "Branthwaite",
          "Garner",
          "McNeil",
          "Barry",
          "Grealish",
          "Dibling",
          "Beto",
          "McNeil"
        ]
      },
      "crystalpalace": {
        "isim": "CRYSTAL PALACE",
        "logo": "./crystalpalace-logo.png",
        "muzik": "crystalpalace-gol.mp3",
        "renkAna": "#1B458F",
        "renkIkinci": "#C4122E",
        "kazandiYazisi": "🦅 CRYSTAL PALACE KAZANDI!",
        "oyuncular": [
          "Larsen",
          "Lacroix",
          "Wharton",
          "Sarr",
          "Johnson",
          "Munoz",
          "Guessand",
          "Pino"
        ]
      },
      "nottingham": {
        "isim": "NOTTINGHAM FOREST",
        "logo": "./nottingham-logo.png",
        "muzik": "nottingham-gol.mp3",
        "renkAna": "#DD0000",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ NOTTINGHAM KAZANDI!",
        "oyuncular": [
          "Gibbs-White",
          "Ndoye",
          "Hudson-Odoi",
          "Murillo",
          "Milenkovic",
          "Anderson",
          "Bakwa",
          "Williams"
        ]
      },
      "wolves": {
        "isim": "WOLVERHAMPTON",
        "logo": "./wolves-logo.png",
        "muzik": "wolves-gol.mp3",
        "renkAna": "#FDB913",
        "renkIkinci": "#231F20",
        "kazandiYazisi": "🐺 WOLVES KAZANDI!",
        "oyuncular": [
          "Andre",
          "Krejci",
          "Arokadare",
          "Mane",
          "Toti",
          "Joao Gomes",
          "Bellegarde",
          "Gomes"
        ]
      },
      "leeds": {
        "isim": "LEEDS UNITED",
        "logo": "./leeds-logo.png",
        "muzik": "leeds-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#1D428A",
        "kazandiYazisi": "⚪🔵 LEEDS UNITED KAZANDI!",
        "oyuncular": [
          "Stach",
          "Ampadu",
          "Calver-Lewin",
          "Struijk",
          "Okafor",
          "Bijol",
          "Aaronson",
          "Gnonto"
        ]
      },
      "sunderland": {
        "isim": "SUNDERLAND",
        "logo": "./sunderland-logo.png",
        "muzik": "sunderland-gol.mp3",
        "renkAna": "#FF0000",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ SUNDERLAND KAZANDI!",
        "oyuncular": [
          "Diarra",
          "Sadiki",
          "Brobbey",
          "Le Fee",
          "Talbi",
          "Rigg",
          "Hume",
          "Geertruida"
        ]
      },
      "burnley": {
        "isim": "BURNLEY",
        "logo": "./burnley-logo.png",
        "muzik": "burnley-gol.mp3",
        "renkAna": "#6C1D45",
        "renkIkinci": "#99C7E7",
        "kazandiYazisi": "🟣🩵 BURNLEY KAZANDI!",
        "oyuncular": [
          "Ugochukwu",
          "Esteve",
          "Florentino",
          "Hartman",
          "Anthony",
          "Hannibal",
          "Tchaouna",
          "Humphreys"
        ]
      }
    }
  },
  // 🇮🇹 İtalya Serie A
  "seriea": {
    "isim": "🇮🇹 İtalya Serie A",
    "takimlar": {
      "napoli": {
        "isim": "NAPOLI",
        "logo": "./napoli-logo.png",
        "muzik": "napoli-gol.mp3",
        "renkAna": "#005BA9",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "💙 NAPOLI KAZANDI!",
        "oyuncular": [
          "Hojlund",
          "McTominay",
          "Neres",
          "Gilmour",
          "Buongiorno",
          "Anguissa",
          "Olivera",
          "Vergara",
          "De Bruyne"
        ],
        "kisaltma": "NAP"
      },
      "inter": {
        "isim": "INTER",
        "logo": "./inter-logo.png",
        "muzik": "inter-gol.mp3",
        "renkAna": "#0018A8",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔵⚫ INTER KAZANDI!",
        "oyuncular": [
          "Lautaro",
          "Barella",
          "Thuram",
          "Çalhanoğlu",
          "Bastoni",
          "Dimarco",
          "Bisseck",
          "Sucic",
          "Augusto",
          "Dumfries"
        ],
        "kisaltma": "INT"
      },
      "juventus": {
        "isim": "JUVENTUS",
        "logo": "./juventus-logo.png",
        "muzik": "juventus-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#000000",
        "kazandiYazisi": "⚪⚫ JUVENTUS KAZANDI!",
        "oyuncular": [
          "Thuram",
          "Kenan Yıldız",
          "Bremer",
          "Koopmeiners",
          "Locatelli",
          "Cambiaso",
          "David",
          "McKennie"
        ],
        "kisaltma": "JUV"
      },
      "atalanta": {
        "isim": "ATALANTA",
        "logo": "./atalanta-logo.png",
        "muzik": "atalanta-gol.mp3",
        "renkAna": "#1E4CB3",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔵⚫ ATALANTA KAZANDI!",
        "oyuncular": [
          "Scalvini",
          "De Ketelaere",
          "Krstovic",
          "Ederson",
          "Raspadori",
          "Zalewski",
          "Ahanor",
          "Scamacca"
        ],
        "kisaltma": "ATA"
      },
      "roma": {
        "isim": "AS ROMA",
        "logo": "./roma-logo.png",
        "muzik": "roma-gol.mp3",
        "renkAna": "#8E192C",
        "renkIkinci": "#F0C420",
        "kazandiYazisi": "🐺 AS ROMA KAZANDI!",
        "oyuncular": [
          "Kone",
          "Malen",
          "Wesley",
          "Ndicka",
          "Soule",
          "Pisili",
          "El Aynaoui",
          "Mancini"
        ],
        "kisaltma": "ROM"
      },
      "lazio": {
        "isim": "LAZIO",
        "logo": "./lazio-logo.png",
        "muzik": "lazio-gol.mp3",
        "renkAna": "#87D8F7",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🦅 LAZIO KAZANDI!",
        "oyuncular": [
          "Zaccagni",
          "Rovella",
          "Gila",
          "Isaksen",
          "Tavares",
          "Maldini",
          "Taylor"
        ],
        "kisaltma": "LAZ"
      },
      "fiorentina": {
        "isim": "FIORENTINA",
        "logo": "./fiorentina-logo.png",
        "muzik": "fiorentina-gol.mp3",
        "renkAna": "#482E92",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🟣 FIORENTINA KAZANDI!",
        "oyuncular": [
          "Gudmundsson",
          "Kean",
          "Ndour",
          "Comuzzo",
          "Dodo",
          "Fagioli",
          "Mandragora"
        ],
        "kisaltma": "FIO"
      },
      "bologna": {
        "isim": "BOLOGNA",
        "logo": "./bologna-logo.png",
        "muzik": "bologna-gol.mp3",
        "renkAna": "#1A2F5C",
        "renkIkinci": "#C21315",
        "kazandiYazisi": "🔴🔵 BOLOGNA KAZANDI!",
        "oyuncular": [
          "Lucimi",
          "Castro",
          "Rowe",
          "Orsolini",
          "Ferguson",
          "Cambiaghi",
          "Miranda",
          "Odgaard"
        ]
      },
      "torino": {
        "isim": "TORINO",
        "logo": "./torino-logo.png",
        "muzik": "torino-gol.mp3",
        "renkAna": "#8C1C2A",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🐂 TORINO KAZANDI!",
        "oyuncular": [
          "Casadei",
          "Ilic",
          "Vlasic",
          "Coco",
          "Adams",
          "Aboukhlal",
          "Prati",
          "Gineitis"
        ]
      },
      "udinese": {
        "isim": "UDINESE",
        "logo": "./udinese-logo.png",
        "muzik": "udinese-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#000000",
        "kazandiYazisi": "⚪⚫ UDINESE KAZANDI!",
        "oyuncular": [
          "Solet",
          "Atta",
          "Zaniolo",
          "Ekkelenkamp",
          "Kristensen",
          "Miller",
          "Davis"
        ]
      },
      "parma": {
        "isim": "PARMA",
        "logo": "./parma-logo.png",
        "muzik": "parma-gol.mp3",
        "renkAna": "#FFD700",
        "renkIkinci": "#002B5C",
        "kazandiYazisi": "🟡🔵 PARMA KAZANDI!",
        "oyuncular": [
          "Keita",
          "Bernabe",
          "Pellegrino",
          "Circati",
          "Sorensen",
          "Britschgi",
          "Frigan",
          "Troilo"
        ]
      },
      "genoa": {
        "isim": "GENOA",
        "logo": "./genoa-logo.png",
        "muzik": "genoa-gol.mp3",
        "renkAna": "#9B002B",
        "renkIkinci": "#00224A",
        "kazandiYazisi": "🔴🔵 GENOA KAZANDI!",
        "oyuncular": [
          "Cuffy",
          "Frendrup",
          "Vasquez",
          "Ekhator",
          "Colombo",
          "Baldanzi",
          "Ostigard",
          "Martin"
        ]
      },
      "cremonese": {
        "isim": "CREMONESE",
        "logo": "./cremonese-logo.png",
        "muzik": "cremonese-gol.mp3",
        "renkAna": "#D2232A",
        "renkIkinci": "#8A8D8F",
        "kazandiYazisi": "🔴 CREMONESE KAZANDI!",
        "oyuncular": [
          "Bondo",
          "Payero",
          "Faye",
          "Terracciano",
          "Luperto",
          "Baschirotto",
          "Barbieri"
        ]
      },
      "como": {
        "isim": "COMO",
        "logo": "./como-logo.png",
        "muzik": "como-gol.mp3",
        "renkAna": "#00458C",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ COMO KAZANDI!",
        "oyuncular": [
          "Perrone",
          "Paz",
          "Diao",
          "Rodriguez",
          "Baturina",
          "Cunha",
          "Addai",
          "Kühn"
        ]
      },
      "pisa": {
        "isim": "PISA",
        "logo": "./pisa-logo.png",
        "muzik": "pisa-gol.mp3",
        "renkAna": "#0054A6",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🖤💙 PISA KAZANDI!",
        "oyuncular": [
          "Loyola",
          "Durosinmi",
          "Akinsanmiro",
          "Toure",
          "Canestrelli",
          "Iling-Junior",
          "Tramoni",
          "Angori"
        ]
      },
      "verona": {
        "isim": "VERONA",
        "logo": "./verona-logo.png",
        "muzik": "verona-gol.mp3",
        "renkAna": "#002F6C",
        "renkIkinci": "#FFD100",
        "kazandiYazisi": "🟡🔵 VERONA KAZANDI!",
        "oyuncular": [
          "Orban",
          "Nelsson",
          "Kotchap",
          "Musrati",
          "Belghali",
          "Bowie",
          "Suslov"
        ]
      },
      "lecce": {
        "isim": "LECCE",
        "logo": "./lecce-logo.png",
        "muzik": "lecce-gol.mp3",
        "renkAna": "#FFFF00",
        "renkIkinci": "#ED1B24",
        "kazandiYazisi": "🟡🔴 LECCE KAZANDI!",
        "oyuncular": [
          "Camarda",
          "Gabriel",
          "Berisha",
          "Stulic",
          "Siebert",
          "Gallo",
          "Gandelman"
        ]
      },
      "cagliari": {
        "isim": "CAGLIARI",
        "logo": "./cagliari-logo.png",
        "muzik": "cagliari-gol.mp3",
        "renkAna": "#002350",
        "renkIkinci": "#E00024",
        "kazandiYazisi": "🔴🔵 CAGLIARI KAZANDI!",
        "oyuncular": [
          "Palestra",
          "Semih",
          "Folorunsho",
          "Dossena",
          "Esposito",
          "Obert",
          "Adope"
        ]
      },
      "sassuolo": {
        "isim": "SASSUOLO",
        "logo": "./sassuolo-logo.png",
        "muzik": "sassuolo-gol.mp3",
        "renkAna": "#00A752",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🖤💚 SASSUOLO KAZANDI!",
        "oyuncular": [
          "Muharemovic",
          "Kone",
          "Lauriente",
          "Pinamonti",
          "Idzes",
          "Thorstvedt",
          "Volpato"
        ]
      },
      "milan": {
        "isim": "MILAN",
        "logo": "./milan-logo.png",
        "muzik": "milan-gol.mp3",
        "renkAna": "#FB090B",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ MILAN KAZANDI!",
        "oyuncular": [
          "Leao",
          "Pulisic",
          "Pavlovic",
          "Jashari",
          "Nkunku",
          "Modric",
          "Rabiot",
          "Fofana",
          "Ricci"
        ],
        "kisaltma": "MIL"
      }
    }
  },
  // 🇪🇸 İspanya La Liga
  "laliga": {
    "isim": "🇪🇸 İspanya La Liga",
    "takimlar": {
      "rm": {
        "isim": "REAL MADRID",
        "logo": "./rm-logo.png",
        "muzik": "rm-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#00529F",
        "kazandiYazisi": "👑 REAL MADRID KAZANDI!",
        "oyuncular": [
          "Mbappe",
          "Vinicius Jr",
          "Bellingham",
          "Rodrygo",
          "Valverde",
          "Brahim",
          "Arda Güler"
        ],
        "kisaltma": "RMA"
      },
      "barca": {
        "isim": "BARCELONA",
        "logo": "./barca-logo.png",
        "muzik": "barca-gol.mp3",
        "renkAna": "#A50044",
        "renkIkinci": "#004D98",
        "kazandiYazisi": "🔵🔴 BARCELONA KAZANDI!",
        "oyuncular": [
          "Lewandowski",
          "Lamine Yamal",
          "Pedri",
          "Raphinha",
          "Dani Olmo",
          "Gavi",
          "Fermin"
        ],
        "kisaltma": "BAR"
      },
      "atletico": {
        "isim": "ATLETICO MADRID",
        "logo": "./atletico-logo.png",
        "muzik": "atletico-gol.mp3",
        "renkAna": "#CB3524",
        "renkIkinci": "#272E61",
        "kazandiYazisi": "🔴⚪ ATLETICO MADRID KAZANDI!",
        "oyuncular": [
          "Griezmann",
          "Alvarez",
          "Sorloth",
          "De Paul",
          "Koke",
          "Llorente",
          "Oblak"
        ],
        "kisaltma": "ATM"
      },
      "bilbao": {
        "isim": "ATHLETIC BILBAO",
        "logo": "./bilbao-logo.png",
        "muzik": "bilbao-gol.mp3",
        "renkAna": "#EE2523",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚪ ATHLETIC BILBAO KAZANDI!",
        "oyuncular": [
          "Iñaki Williams",
          "Nico Williams",
          "Sancet",
          "Guruzeta",
          "Vivian",
          "Unai Simon"
        ],
        "kisaltma": "ATH"
      },
      "sociedad": {
        "isim": "REAL SOCIEDAD",
        "logo": "./sociedad-logo.png",
        "muzik": "sociedad-gol.mp3",
        "renkAna": "#0067B1",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ REAL SOCIEDAD KAZANDI!",
        "oyuncular": [
          "Oyarzabal",
          "Kubo",
          "Zubimendi",
          "Brais Mendez",
          "Becker",
          "Remiro"
        ]
      },
      "betis": {
        "isim": "REAL BETIS",
        "logo": "./betis-logo.png",
        "muzik": "betis-gol.mp3",
        "renkAna": "#078930",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🟢⚪ REAL BETIS KAZANDI!",
        "oyuncular": [
          "Isco",
          "Lo Celso",
          "Abde",
          "Fornals",
          "Vitor Roque",
          "Bartra"
        ],
        "kisaltma": "BET"
      },
      "villarreal": {
        "isim": "VILLARREAL",
        "logo": "./villarreal-logo.png",
        "muzik": "villarreal-gol.mp3",
        "renkAna": "#FCE300",
        "renkIkinci": "#00508F",
        "kazandiYazisi": "🟡🔵 VILLARREAL KAZANDI!",
        "oyuncular": [
          "Baena",
          "Gerard Moreno",
          "Ayoze Perez",
          "Parejo",
          "Yeremy Pino",
          "Comesana"
        ]
      },
      "sevilla": {
        "isim": "SEVILLA",
        "logo": "./sevilla-logo.png",
        "muzik": "sevilla-gol.mp3",
        "renkAna": "#D11241",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ SEVILLA KAZANDI!",
        "oyuncular": [
          "Jesus Navas",
          "Isaac Romero",
          "Lukebakio",
          "Sow",
          "Bade",
          "Nyland"
        ],
        "kisaltma": "SEV"
      },
      "espanyol": {
        "isim": "ESPANYOL",
        "logo": "./espanyol-logo.png",
        "muzik": "espanyol-gol.mp3",
        "renkAna": "#004B9C",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ ESPANYOL KAZANDI!",
        "oyuncular": [
          "Romero",
          "El Hilali",
          "Zarate",
          "Dolan",
          "Fernandez",
          "Ngonge",
          "Puado"
        ]
      },
      "levante": {
        "isim": "LEVANTE UD",
        "logo": "./levante-logo.png",
        "muzik": "levante-gol.mp3",
        "renkAna": "#A60032",
        "renkIkinci": "#005CAA",
        "kazandiYazisi": "🔴🔵 LEVANTE KAZANDI!",
        "oyuncular": [
          "Eyong",
          "Alvarez",
          "Romero",
          "Sanchez",
          "Matturro",
          "Moreno",
          "Dela"
        ]
      },
      "elche": {
        "isim": "ELCHE CF",
        "logo": "./elche-logo.png",
        "muzik": "elche-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#007A33",
        "kazandiYazisi": "⚪🟢 ELCHE KAZANDI!",
        "oyuncular": [
          "Fort",
          "Affengruber",
          "Valera",
          "Febas",
          "Neto",
          "Rodriguez",
          "Mir"
        ]
      },
      "oviedo": {
        "isim": "REAL OVIEDO",
        "logo": "./oviedo-logo.png",
        "muzik": "oviedo-gol.mp3",
        "renkAna": "#0033A0",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ REAL OVIEDO KAZANDI!",
        "oyuncular": [
          "Carmo",
          "Lopez",
          "Fernandez",
          "Vinas",
          "Chaira",
          "Hassan",
          "Borbas"
        ]
      },
      "valencia": {
        "isim": "VALENCIA",
        "logo": "./valencia-logo.png",
        "muzik": "valencia-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🦇 VALENCIA KAZANDI!",
        "oyuncular": [
          "Hugo Duro",
          "Javi Guerra",
          "Pepelu",
          "Diego Lopez",
          "Gaya",
          "Mamardashvili"
        ]
      },
      "girona": {
        "isim": "GIRONA",
        "logo": "./girona-logo.png",
        "muzik": "girona-gol.mp3",
        "renkAna": "#E20613",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ GIRONA KAZANDI!",
        "oyuncular": [
          "Reis",
          "Tsygankov",
          "Echeverri",
          "Gil",
          "Ounahi"
        ]
      },
      "celta": {
        "isim": "CELTA VIGO",
        "logo": "./celta-logo.png",
        "muzik": "celta-gol.mp3",
        "renkAna": "#8CC6D7",
        "renkIkinci": "#E53027",
        "kazandiYazisi": "🩵 CELTA VIGO KAZANDI!",
        "oyuncular": [
          "Iago Aspas",
          "Bamba",
          "Mingueza",
          "Beltran",
          "Starfelt"
        ]
      },
      "mallorca": {
        "isim": "MALLORCA",
        "logo": "./mallorca-logo.png",
        "muzik": "mallorca-gol.mp3",
        "renkAna": "#E2001A",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ MALLORCA KAZANDI!",
        "oyuncular": [
          "Muriqi",
          "Darder",
          "Samu Costa",
          "Raillo",
          "Valjent"
        ]
      },
      "osasuna": {
        "isim": "OSASUNA",
        "logo": "./osasuna-logo.png",
        "muzik": "osasuna-gol.mp3",
        "renkAna": "#C11D2A",
        "renkIkinci": "#002D57",
        "kazandiYazisi": "🔴🔵 OSASUNA KAZANDI!",
        "oyuncular": [
          "Budimir",
          "Aimar Oroz",
          "Moncayola",
          "Boyomo",
          "Sergio Herrera"
        ]
      },
      "alaves": {
        "isim": "ALAVES",
        "logo": "./alaves-logo.png",
        "muzik": "alaves-gol.mp3",
        "renkAna": "#0050BC",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ ALAVES KAZANDI!",
        "oyuncular": [
          "Kike Garcia",
          "Guridi",
          "Guevara",
          "Tenaglia",
          "Sivera"
        ]
      },
      "getafe": {
        "isim": "GETAFE",
        "logo": "./getafe-logo.png",
        "muzik": "getafe-gol.mp3",
        "renkAna": "#004F9F",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵 GETAFE KAZANDI!",
        "oyuncular": [
          "Borja Mayoral",
          "Milla",
          "Arambarri",
          "Djene",
          "David Soria"
        ]
      },
      "rayo": {
        "isim": "RAYO VALLECANO",
        "logo": "./rayo-logo.png",
        "muzik": "rayo-gol.mp3",
        "renkAna": "#FFFFFF",
        "renkIkinci": "#E53027",
        "kazandiYazisi": "⚡ RAYO VALLECANO KAZANDI!",
        "oyuncular": [
          "Isi Palazon",
          "Alvaro Garcia",
          "Camello",
          "Trejo",
          "Lejeune"
        ]
      }
    }
  },
  // 🇩🇪 Almanya Bundesliga
  "bundesliga": {
    "isim": "🇩🇪 Almanya Bundesliga",
    "takimlar": {
      "bayern": {
        "isim": "BAYERN MÜNİH",
        "logo": "./bayern-logo.png",
        "muzik": "bayern-gol.mp3",
        "renkAna": "#DC052D",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ BAYERN KAZANDI!",
        "oyuncular": [
          "Musiala",
          "Olise",
          "Kane",
          "Díaz",
          "Kimmich",
          "Upamecano",
          "Pavlović"
        ],
        "kisaltma": "BAY"
      },
      "leverkusen": {
        "isim": "B. LEVERKUSEN",
        "logo": "./leverkusen-logo.png",
        "muzik": "leverkusen-gol.mp3",
        "renkAna": "#E32221",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ LEVERKUSEN KAZANDI!",
        "oyuncular": [
          "Quansah",
          "Maza",
          "Kofane",
          "Tapsoba",
          "Schick",
          "Tillman",
          "Bade"
        ],
        "kisaltma": "LEV"
      },
      "dortmund": {
        "isim": "B. DORTMUND",
        "logo": "./dortmund-logo.png",
        "muzik": "dortmund-gol.mp3",
        "renkAna": "#FDE100",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🟡⚫ DORTMUND KAZANDI!",
        "oyuncular": [
          "Nmechha",
          "Guirassy",
          "Beier",
          "Adeyemi",
          "Schlotterbeck",
          "Bellingham",
          "Silva"
        ],
        "kisaltma": "BVB"
      },
      "leipzig": {
        "isim": "RB LEIPZIG",
        "logo": "./leipzig-logo.png",
        "muzik": "leipzig-gol.mp3",
        "renkAna": "#DD013F",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ LEIPZIG KAZANDI!",
        "oyuncular": [
          "Diomande",
          "Lukeba",
          "Nusa",
          "Baumgartner",
          "Romulo",
          "Gruda",
          "Ouedraogo",
          "Raum"
        ],
        "kisaltma": "RBL"
      },
      "stuttgart": {
        "isim": "STUTTGART",
        "logo": "./stuttgart-logo.png",
        "muzik": "stuttgart-gol.mp3",
        "renkAna": "#E32219",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ STUTTGART KAZANDI!",
        "oyuncular": [
          "Undav",
          "Leweling",
          "Stiller",
          "Jeltsch",
          "Hendriks",
          "Andres",
          "Demirovic"
        ]
      },
      "frankfurt": {
        "isim": "E. FRANKFURT",
        "logo": "./frankfurt-logo.png",
        "muzik": "frankfurt-gol.mp3",
        "renkAna": "#E1000F",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ FRANKFURT KAZANDI!",
        "oyuncular": [
          "Can Uzun",
          "Burkardt",
          "Brown",
          "Larsson",
          "Kalimuendo",
          "Doan",
          "Bahoya"
        ]
      },
      "freiburg": {
        "isim": "FREIBURG",
        "logo": "./freiburg-logo.png",
        "muzik": "freiburg-gol.mp3",
        "renkAna": "#C8102E",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🔴⚫ FREIBURG KAZANDI!",
        "oyuncular": [
          "Manzambi",
          "Suzuki",
          "Lienhart",
          "Osterhage",
          "Eggestein",
          "Treu",
          "Matanovic"
        ]
      },
      "gladbach": {
        "isim": "MÖNCHENGLADBACH",
        "logo": "./gladbach-logo.png",
        "muzik": "gladbach-gol.mp3",
        "renkAna": "#008000",
        "renkIkinci": "#000000",
        "kazandiYazisi": "🟢⚫ GLADBACH KAZANDI!",
        "oyuncular": [
          "Kleindienst",
          "Mohya",
          "Honorat",
          "Reitz",
          "Hack",
          "Elvedi"
        ]
      },
      "bremen": {
        "isim": "WERDER BREMEN",
        "logo": "./bremen-logo.png",
        "muzik": "bremen-gol.mp3",
        "renkAna": "#1D9053",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🟢⚪ W. BREMEN KAZANDI!",
        "oyuncular": [
          "Coulibaly",
          "Schmid",
          "Lynen",
          "Stage",
          "Friedl",
          "Puertas",
          "Sugawara"
        ]
      },
      "wolfsburg": {
        "isim": "WOLFSBURG",
        "logo": "./wolfsburg-logo.png",
        "muzik": "wolfsburg-gol.mp3",
        "renkAna": "#65B32E",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🟢⚪ WOLFSBURG KAZANDI!",
        "oyuncular": [
          "Wimmer",
          "Amoura",
          "Koulierakis",
          "Belocian",
          "Kumbedi",
          "Majer"
        ]
      },
      "union": {
        "isim": "UNION BERLIN",
        "logo": "./union-logo.png",
        "muzik": "union-gol.mp3",
        "renkAna": "#D4011D",
        "renkIkinci": "#FDE100",
        "kazandiYazisi": "🔴🟡 UNION BERLIN KAZANDI!",
        "oyuncular": [
          "Querfeld",
          "Doekhi",
          "Leiti",
          "Kemlein",
          "Ansah",
          "Rothe",
          "Ilic",
          "Schafer"
        ]
      },
      "augsburg": {
        "isim": "AUGSBURG",
        "logo": "./augsburg-logo.png",
        "muzik": "augsburg-gol.mp3",
        "renkAna": "#BA3733",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ AUGSBURG KAZANDI!",
        "oyuncular": [
          "Matsima",
          "Banks",
          "Maurice",
          "Mert Kömür",
          "Rieder",
          "Kade",
          "Jakic"
        ]
      },
      "mainz": {
        "isim": "MAINZ 05",
        "logo": "./mainz-logo.png",
        "muzik": "mainz-gol.mp3",
        "renkAna": "#ED1C24",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔴⚪ MAINZ KAZANDI!",
        "oyuncular": [
          "Sano",
          "Amiri",
          "Nebel",
          "Potulski",
          "Weiper",
          "Caci",
          "Posch",
          "Hollerbach"
        ]
      },
      "hoffenheim": {
        "isim": "HOFFENHEIM",
        "logo": "./hoffenheim-logo.png",
        "muzik": "hoffenheim-gol.mp3",
        "renkAna": "#005CA9",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ HOFFENHEIM KAZANDI!",
        "oyuncular": [
          "Toure",
          "Asllani",
          "Avdullahu",
          "Burger",
          "Hajdari",
          "Ozan Kabak",
          "Hranac"
        ]
      },
      "heidenheim": {
        "isim": "HEIDENHEIM",
        "logo": "./heidenheim-logo.png",
        "muzik": "heidenheim-gol.mp3",
        "renkAna": "#E2001A",
        "renkIkinci": "#00529F",
        "kazandiYazisi": "🔴🔵 HEIDENHEIM KAZANDI!",
        "oyuncular": [
          "Dinkçi",
          "Ibrahimovic",
          "Pieringer",
          "Schöppner",
          "Stergiou",
          "Mainka"
        ]
      },
      "bochum": {
        "isim": "VFL BOCHUM",
        "logo": "./bochum-logo.png",
        "muzik": "bochum-gol.mp3",
        "renkAna": "#005CA9",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ BOCHUM KAZANDI!",
        "oyuncular": [
          "Onyeka",
          "Lenz",
          "Morgalla",
          "Pannewig",
          "Watjen",
          "Marshall",
          "Olsen"
        ]
      },
      "stpauli": {
        "isim": "ST. PAULI",
        "logo": "./stpauli-logo.png",
        "muzik": "stpauli-gol.mp3",
        "renkAna": "#8E6B52",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🟤⚪ ST. PAULI KAZANDI!",
        "oyuncular": [
          "Fujita",
          "Smith",
          "Sands",
          "Hountondji",
          "Lage",
          "Sinani",
          "Pyrka"
        ]
      },
      "kiel": {
        "isim": "HOLSTEIN KIEL",
        "logo": "./kiel-logo.png",
        "muzik": "kiel-gol.mp3",
        "renkAna": "#0040A5",
        "renkIkinci": "#FFFFFF",
        "kazandiYazisi": "🔵⚪ HOLSTEIN KIEL KAZANDI!",
        "oyuncular": [
          "Machino",
          "Pichler",
          "Holtby",
          "Becker",
          "Weiner"
        ]
      }
    }
  },
  // 🇫🇷 Fransa Ligue 1
  "ligue1": {
    "isim": "🇫🇷 Fransa Ligue 1",
    "takimlar": {
      "psg": {
        "isim": "Paris Saint-Germain",
        "logo": "./psg-logo.png",
        "muzik": "psg-gol.mp3",
        "renkAna": "#61a2fa",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Paris Saint-Germain KAZANDI!",
        "oyuncular": [],
        "kisaltma": "PSG"
      },
      "marseille": {
        "isim": "Marseille",
        "logo": "./marseille-logo.png",
        "muzik": "marseille-gol.mp3",
        "renkAna": "#7fdaff",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Marseille KAZANDI!",
        "oyuncular": [],
        "kisaltma": "OM"
      },
      "lyon": {
        "isim": "Lyon",
        "logo": "./lyon-logo.png",
        "muzik": "lyon-gol.mp3",
        "renkAna": "#df7e85",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Lyon KAZANDI!",
        "oyuncular": [],
        "kisaltma": "LYO"
      },
      "monaco": {
        "isim": "Monaco",
        "logo": "./monaco-logo.png",
        "muzik": "monaco-gol.mp3",
        "renkAna": "#fb6f76",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Monaco KAZANDI!",
        "oyuncular": [],
        "kisaltma": "MON"
      }
    }
  },
  // UEFA Şampiyonlar Ligi
  "ucl": {
    "isim": "UEFA Şampiyonlar Ligi",
    "takimlar": {}
  },
  // UEFA Avrupa Ligi
  "uel": {
    "isim": "UEFA Avrupa Ligi",
    "takimlar": {}
  },
  // Diğer Avrupa kulüpleri
  "diger": {
    "isim": "Diğer Avrupa kulüpleri",
    "takimlar": {
      "porto": {
        "isim": "Porto",
        "logo": "./porto-logo.png",
        "muzik": "porto-gol.mp3",
        "renkAna": "#5f9bf6",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Porto KAZANDI!",
        "oyuncular": [],
        "kisaltma": "POR"
      },
      "benfica": {
        "isim": "Benfica",
        "logo": "./benfica-logo.png",
        "muzik": "benfica-gol.mp3",
        "renkAna": "#f8656a",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Benfica KAZANDI!",
        "oyuncular": [],
        "kisaltma": "BEN"
      },
      "sporting": {
        "isim": "Sporting",
        "logo": "./sporting-logo.png",
        "muzik": "sporting-gol.mp3",
        "renkAna": "#62c898",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Sporting KAZANDI!",
        "oyuncular": [],
        "kisaltma": "SCP"
      },
      "ajax": {
        "isim": "Ajax",
        "logo": "./ajax-logo.png",
        "muzik": "ajax-gol.mp3",
        "renkAna": "#ff7a7a",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Ajax KAZANDI!",
        "oyuncular": [],
        "kisaltma": "AJX"
      },
      "psv": {
        "isim": "PSV",
        "logo": "./psv-logo.png",
        "muzik": "psv-gol.mp3",
        "renkAna": "#f27878",
        "renkIkinci": "#142439",
        "kazandiYazisi": "PSV KAZANDI!",
        "oyuncular": [],
        "kisaltma": "PSV"
      },
      "feyenoord": {
        "isim": "Feyenoord",
        "logo": "./feyenoord-logo.png",
        "muzik": "feyenoord-gol.mp3",
        "renkAna": "#f58181",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Feyenoord KAZANDI!",
        "oyuncular": [],
        "kisaltma": "FEY"
      }
    }
  },
  // 🌍 Millî takımlar
  "milli": {
    "isim": "🌍 Millî takımlar",
    "takimlar": {
      "turkiye": {
        "isim": "Türkiye",
        "logo": "./turkiye-logo.png",
        "muzik": "turkiye-gol.mp3",
        "renkAna": "#ff5964",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Türkiye KAZANDI!",
        "oyuncular": [],
        "kisaltma": "TUR"
      },
      "brezilya": {
        "isim": "Brezilya",
        "logo": "./brezilya-logo.png",
        "muzik": "brezilya-gol.mp3",
        "renkAna": "#f6da53",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Brezilya KAZANDI!",
        "oyuncular": [],
        "kisaltma": "BRA"
      },
      "arjantin": {
        "isim": "Arjantin",
        "logo": "./arjantin-logo.png",
        "muzik": "arjantin-gol.mp3",
        "renkAna": "#85d3f9",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Arjantin KAZANDI!",
        "oyuncular": [],
        "kisaltma": "ARG"
      },
      "fransa": {
        "isim": "Fransa",
        "logo": "./fransa-logo.png",
        "muzik": "fransa-gol.mp3",
        "renkAna": "#7899fb",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Fransa KAZANDI!",
        "oyuncular": [],
        "kisaltma": "FRA"
      },
      "almanya": {
        "isim": "Almanya",
        "logo": "./almanya-logo.png",
        "muzik": "almanya-gol.mp3",
        "renkAna": "#f3c34f",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Almanya KAZANDI!",
        "oyuncular": [],
        "kisaltma": "GER"
      },
      "ingiltere": {
        "isim": "İngiltere",
        "logo": "./ingiltere-logo.png",
        "muzik": "ingiltere-gol.mp3",
        "renkAna": "#fafafa",
        "renkIkinci": "#142439",
        "kazandiYazisi": "İngiltere KAZANDI!",
        "oyuncular": [],
        "kisaltma": "ENG"
      },
      "ispanya": {
        "isim": "İspanya",
        "logo": "./ispanya-logo.png",
        "muzik": "ispanya-gol.mp3",
        "renkAna": "#f7be48",
        "renkIkinci": "#142439",
        "kazandiYazisi": "İspanya KAZANDI!",
        "oyuncular": [],
        "kisaltma": "ESP"
      },
      "portekiz": {
        "isim": "Portekiz",
        "logo": "./portekiz-logo.png",
        "muzik": "portekiz-gol.mp3",
        "renkAna": "#65d28d",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Portekiz KAZANDI!",
        "oyuncular": [],
        "kisaltma": "PRT"
      },
      "italya": {
        "isim": "İtalya",
        "logo": "./italya-logo.png",
        "muzik": "italya-gol.mp3",
        "renkAna": "#60a2fb",
        "renkIkinci": "#142439",
        "kazandiYazisi": "İtalya KAZANDI!",
        "oyuncular": [],
        "kisaltma": "ITA"
      },
      "hollanda": {
        "isim": "Hollanda",
        "logo": "./hollanda-logo.png",
        "muzik": "hollanda-gol.mp3",
        "renkAna": "#ff9b4e",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Hollanda KAZANDI!",
        "oyuncular": [],
        "kisaltma": "NED"
      },
      "belcika": {
        "isim": "Belçika",
        "logo": "./belcika-logo.png",
        "muzik": "belcika-gol.mp3",
        "renkAna": "#f2b854",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Belçika KAZANDI!",
        "oyuncular": [],
        "kisaltma": "BEL"
      },
      "hirvatistan": {
        "isim": "Hırvatistan",
        "logo": "./hirvatistan-logo.png",
        "muzik": "hirvatistan-gol.mp3",
        "renkAna": "#ec7a85",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Hırvatistan KAZANDI!",
        "oyuncular": [],
        "kisaltma": "CRO"
      },
      "japonya": {
        "isim": "Japonya",
        "logo": "./japonya-logo.png",
        "muzik": "japonya-gol.mp3",
        "renkAna": "#f4f4f4",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Japonya KAZANDI!",
        "oyuncular": [],
        "kisaltma": "JPN"
      },
      "fas": {
        "isim": "Fas",
        "logo": "./fas-logo.png",
        "muzik": "fas-gol.mp3",
        "renkAna": "#ee7272",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Fas KAZANDI!",
        "oyuncular": [],
        "kisaltma": "MAR"
      },
      "uruguay": {
        "isim": "Uruguay",
        "logo": "./uruguay-logo.png",
        "muzik": "uruguay-gol.mp3",
        "renkAna": "#8bcaf3",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Uruguay KAZANDI!",
        "oyuncular": [],
        "kisaltma": "URU"
      },
      "kolombiya": {
        "isim": "Kolombiya",
        "logo": "./kolombiya-logo.png",
        "muzik": "kolombiya-gol.mp3",
        "renkAna": "#f4d14b",
        "renkIkinci": "#142439",
        "kazandiYazisi": "Kolombiya KAZANDI!",
        "oyuncular": [],
        "kisaltma": "COL"
      }
    }
  },
};
