var _ = _(_(), 1);
var _ = [17, 34];
function _() {
  return [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 37, 38, 39, 40, 41,
  ];
}
function _() {
  return [..._(), ..._, 33, 42, 43, 44, 45, 46, 47];
}
function _() {
  return [1, 2, 3, 4];
}
function _(_) {
  switch (_) {
    case 2:
      return "GBP";
    case 3:
      return "EUR";
    case 4:
      return "CHF";
    case 5:
      return "RUB";
    case 6:
      return "PLN";
    case 7:
      return "BRL";
    case 8:
      return "JPY";
    case 9:
      return "NOK";
    case 10:
      return "IDR";
    case 11:
      return "MYR";
    case 12:
      return "PHP";
    case 13:
      return "SGD";
    case 14:
      return "THB";
    case 15:
      return "VND";
    case 16:
      return "KRW";
    case 17:
      return "TRY";
    case 18:
      return "UAH";
    case 19:
      return "MXN";
    case 20:
      return "CAD";
    case 21:
      return "AUD";
    case 22:
      return "NZD";
    case 23:
      return "CNY";
    case 24:
      return "INR";
    case 25:
      return "CLP";
    case 26:
      return "PEN";
    case 27:
      return "COP";
    case 28:
      return "ZAR";
    case 29:
      return "HKD";
    case 30:
      return "TWD";
    case 31:
      return "SAR";
    case 32:
      return "AED";
    case 33:
      return "SEK";
    case 34:
      return "ARS";
    case 35:
      return "ILS";
    case 36:
      return "BYN";
    case 37:
      return "KZT";
    case 38:
      return "KWD";
    case 39:
      return "QAR";
    case 40:
      return "CRC";
    case 41:
      return "UYU";
    case 42:
      return "BGN";
    case 43:
      return "HRK";
    case 44:
      return "CZK";
    case 45:
      return "DKK";
    case 46:
      return "HUF";
    case 47:
      return "RON";
    default:
      return "USD";
  }
}
function _(_) {
  switch (_) {
    case 1:
      return "CIS";
    case 2:
      return "SASIA";
    case 3:
      return "LATAM";
    case 4:
      return "MENA";
  }
  return "Unknown";
}
function _() {
  let _ = _("pricing_guideline", "application_config");
  if (_) return Promise.resolve(_);
  {
    let _ = _.getQueryData(_());
    return Promise.resolve(_ ?? null);
  }
}
var _ = _(_(), 1);
function _() {
  let _ = _(_());
  return (0, _.useMemo)(() => (_.data ? new _(_.data) : null), [_.data]);
}
function _() {
  return {
    queryKey: _(),
    queryFn: async () => await _(),
  };
}
function _() {
  return ["PricingGuideline"];
}
var _ = "./pricing_arabic-XXXXXXXX.json";
var _ = "./pricing_brazilian-XXXXXXXX.json";
var _ = "./pricing_bulgarian-XXXXXXXX.json";
var _ = "./pricing_czech-XXXXXXXX.json";
var _ = "./pricing_danish-XXXXXXXX.json";
var _ = "./pricing_dutch-XXXXXXXX.json";
var _ = "./pricing_english-XXXXXXXX.json";
var _ = "./pricing_finnish-XXXXXXXX.json";
var _ = "./pricing_french-XXXXXXXX.json";
var _ = "./pricing_german-XXXXXXXX.json";
var _ = "./pricing_greek-XXXXXXXX.json";
var _ = "./pricing_hungarian-XXXXXXXX.json";
var _ = "./pricing_indonesian-XXXXXXXX.json";
var _ = "./pricing_italian-XXXXXXXX.json";
var _ = "./pricing_japanese-XXXXXXXX.json";
var _ = "./pricing_koreana-XXXXXXXX.json";
var _ = "./pricing_latam-XXXXXXXX.json";
var _ = "./pricing_norwegian-XXXXXXXX.json";
var _ = "./pricing_polish-XXXXXXXX.json";
var _ = "./pricing_portuguese-XXXXXXXX.json";
var _ = "./pricing_romanian-XXXXXXXX.json";
var _ = "./pricing_russian-XXXXXXXX.json";
var _ = "./pricing_schinese-XXXXXXXX.json";
var _ = "./pricing_spanish-XXXXXXXX.json";
var _ = "./pricing_swedish-XXXXXXXX.json";
var _ = "./pricing_tchinese-XXXXXXXX.json";
var _ = "./pricing_thai-XXXXXXXX.json";
var _ = "./pricing_turkish-XXXXXXXX.json";
var _ = "./pricing_ukrainian-XXXXXXXX.json";
var _ = "./pricing_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
var _ = _(),
  _ = _(),
  _ = _();
var _ = 1,
  _ = class {
    m_mapUSDPrice = new Map();
    m_mapKeyToGuidePrice = new Map();
    m_rgUSDPricePointInCents = [];
    m_setConversionMethod = new Set();
    m_setSupportedCurrencies = new Set();
    m_setSupportedRegions = new Set();
    GetKey(_, _, _, _ = _) {
      return `${_}_${_}_${_ || 0}_${_}`;
    }
    GetAvailableConversionMethods() {
      return Array.from(this.m_setConversionMethod).sort();
    }
    GetAnyPricePoint() {
      return Array.from(this.m_mapUSDPrice.get(1)?.values() || [])[0];
    }
    BIsSupportCurrencyAndOrRegion(_, _) {
      return _
        ? _ == 1 && this.m_setSupportedRegions.has(_)
        : this.m_setSupportedCurrencies.has(_);
    }
    GetRecommendPrice(_, _, _, _ = _) {
      let _ = this.GetKey(_, _, _, _);
      return this.m_mapKeyToGuidePrice.get(_);
    }
    GetScaledRecommendedPrice(_, _, _, _ = _) {
      let _ = -1,
        _ = -1;
      for (let _ of this.m_mapUSDPrice.get(_).keys()) {
        let _ = Math.abs(_ - _);
        (_ == -1 || _ < _) && ((_ = _), (_ = _));
      }
      let _ = this.m_mapUSDPrice.get(_).get(_),
        _ = _
          ? _.region_prices.find((_) => _.region_code == _)
          : _.currency_prices.find((_) => _.currency_code == _),
        _ = _ / _;
      return {
        currency_code: _?.currency_code,
        region_code: _?.region_code,
        price: Math.ceil((_?.price || 0) * _),
      };
    }
    GetUSDPricePointsInCents() {
      return this.m_rgUSDPricePointInCents;
    }
    constructor(_) {
      let _ = new Set();
      _.forEach((_) => {
        let _ = _.convert_method ?? _;
        this.m_setConversionMethod.add(_),
          this.m_mapUSDPrice.has(_) || this.m_mapUSDPrice.set(_, new Map()),
          this.m_mapUSDPrice.get(_).set(_.usd_price, _),
          _.add(_.usd_price),
          _.currency_prices.forEach((_) => {
            let _ = this.GetKey(
              _.usd_price,
              _.currency_code,
              0,
              _.convert_method || _,
            );
            this.m_mapKeyToGuidePrice.set(_, _),
              this.m_setSupportedCurrencies.add(_.currency_code);
          }),
          _.region_prices.forEach((_) => {
            let _ = this.GetKey(
              _.usd_price,
              _.currency_code,
              _.region_code,
              _.convert_method || _,
            );
            if (
              (this.m_mapKeyToGuidePrice.set(_, _),
              this.m_setSupportedRegions.add(_.region_code),
              this.m_setConversionMethod.has(3))
            ) {
              let _ = {
                  currency_code: 1,
                  price: _.usd_price,
                  region_code: _.region_code,
                },
                _ = this.GetKey(_.usd_price, 1, _.region_code, 3);
              this.m_mapKeyToGuidePrice.set(_, _);
            }
          });
      }),
        (this.m_rgUSDPricePointInCents = Array.from(_.keys()));
    }
  };
var _ = _(_(), 1),
  _ = _.createContext({
    eConversionMethod: 1,
    setConversionMethod: (_) => {},
    rgAvailableConversionMethods: [],
  });
function _() {
  return _.useContext(_);
}
export { _, _, _, _, _ };
