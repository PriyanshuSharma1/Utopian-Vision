import React, { useRef, useState, useEffect } from "react";
import Nav from "../Nav/views";
import "../Page/button.css";
import maplibre from "maplibre-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import axios from "axios";
import "../Page/checkbox.sass";
import "../Page/conclusion.sass";
import "../LeftContainer/LeftContainer.css";
import locLists from "../Location/Location";
import Spinner from "../spinner/spinner";
import { useNavigate } from "react-router-dom";
import CurrentSchool from "../Location/CurrentSchool";
export default function SecondPageSchool() {
  const BaseURL = "http://127.0.0.1:8000/api/a";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(85.57865705821206);
  const [lat, setLat] = useState(27.563915341941566);
  const [zoom, setZoom] = useState(9.5);
  const [boundData, setBoundData] = useState([]);
  const [timerPage, setTimerPage] = useState(0);
  let navigate = useNavigate();
  const [jsonHos, setJsonHos] = useState([]);
  //point all the json
  useEffect(() => {
    let temp = [];
    CurrentSchool.features.map((data, index) => {
      temp[index] = data.geometry.coordinates;
    });
    setJsonHos(temp);
  }, []);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new maplibre.Map({
      container: mapContainer.current,
      style:
        "https://api.baato.io/api/v1/styles/retro?key=bpk.RbCFuyprceXfPDgW7kxOENj-7iX968-ZRiYMv4nw9cwM",
      center: [lng, lat],
      zoom: zoom,
    });
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      color: "red",
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: "draw_polygon",
    });

    map.current.addControl(draw);

    map.current.on("draw.create", updateArea);

    map.current.on("draw.delete", updateArea);

    map.current.on("draw.update", updateArea);

    map.current?.on("load", function () {
      map.current.addSource("maine", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            // These coordinates outline Maine.
            coordinates: [
              [
                [85.42470903990747, 27.752493539046522],
                [85.877, 27.75],
                [85.868, 27.407999999999998],
                [85.31073252713934, 27.41274692835616],
                [85.31305677919781, 27.414881687760897],
                [85.31614353977595, 27.418338242252116],
                [85.31883597647267, 27.42204807313191],
                [85.32110814278823, 27.425975478783528],
                [85.32293812904743, 27.43008266088357],
                [85.32430827444894, 27.434330087469284],
                [85.32520533856385, 27.438676872788417],
                [85.32562063057779, 27.443081170307124],
                [85.32555009496642, 27.44750057511986],
                [85.32499435270313, 27.451892531908857],
                [85.32395869752018, 27.456214744541185],
                [85.32245304717256, 27.460425583368046],
                [85.32049185008796, 27.464484486305466],
                [85.31809394821808, 27.468352349827935],
                [85.31528239733468, 27.471991906095738],
                [85.3120842464331, 27.475368082563776],
                [85.30853027831147, 27.478448340581462],
                [85.30465471378183, 27.481202989691067],
                [85.3004948823357, 27.483605474561273],
                [85.29609086242603, 27.48563263175421],
                [85.29148509483825, 27.48726491381329],
                [85.28672197289818, 27.488486578474447],
                [85.2818474135047, 27.489285841141584],
                [85.27690841317366, 27.489654989123732],
                [85.27195259343625, 27.489590456505052],
                [85.27121145547886, 27.48951558500858],
                [85.2713903027813, 27.552110752906252],
                [85.27342080808407, 27.54948569623931],
                [85.27662210066099, 27.54611005820096],
                [85.28017899238496, 27.543030290030497],
                [85.2840572227449, 27.54027602568855],
                [85.28821944808803, 27.537873763712454],
                [85.2926256010317, 27.535846613036437],
                [85.29723327567469, 27.534214071440672],
                [85.30199813492293, 27.53299183872512],
                [85.3068743360489, 27.532191666370927],
                [85.31181497043988, 27.53182124510504],
                [85.31677251336737, 27.531884131422437],
                [85.32169927952147, 27.532379713751443],
                [85.32654788000546, 27.533303218571955],
                [85.33127167647463, 27.53464575641892],
                [85.33582522813154, 27.536394407326682],
                [85.34016472735495, 27.538532344897423],
                [85.34424841984315, 27.54103899781243],
                [85.34803700529254, 27.543890247250687],
                [85.35149401480763, 27.547058658340216],
                [85.3545861614495, 27.55051374344417],
                [85.35728366057236, 27.554222254781596],
                [85.35956051687312, 27.558148503602446],
                [85.36020484250925, 27.559590945402167],
                [85.36419920443079, 27.559640101800422],
                [85.36912720170722, 27.560133826088183],
                [85.37397721750041, 27.561055479159272],
                [85.3787025999593, 27.56239618930879],
                [85.38325789315095, 27.564143054113213],
                [85.3875992728301, 27.566279264332287],
                [85.39168496673673, 27.568784265256593],
                [85.39547565544193, 27.57163395396733],
                [85.39893484993632, 27.574800910634647],
                [85.40202924236672, 27.57825466165858],
                [85.40472902656931, 27.58196197215337],
                [85.40700818532211, 27.585887164996546],
                [85.40884474154318, 27.589992463409068],
                [85.41022097099172, 27.59423835380606],
                [85.41112357438385, 27.598583965460673],
                [85.4115438072117, 27.602987463358374],
                [85.41147756594907, 27.60740645048756],
                [85.41092542973766, 27.611798375715622],
                [85.41026404230905, 27.614566575015655],
                [85.41416759807953, 27.616061493618226],
                [85.41851164053782, 27.618196412463544],
                [85.42260001439506, 27.620700178839172],
                [85.42515295635008, 27.622617272713843],
                [85.42984211055277, 27.623505536151093],
                [85.43457069816644, 27.624843934514224],
                [85.43912935061302, 27.626588540302116],
                [85.44347421153445, 27.628722566001926],
                [85.44546685682454, 27.6299422340771],
                [85.4469710586529, 27.630091849196088],
                [85.45182450724249, 27.631010326048848],
                [85.45655358986582, 27.632347901077498],
                [85.46111281524458, 27.634091701968803],
                [85.46545832156012, 27.636224948937016],
                [85.46954829710171, 27.63872711578987],
                [85.47312036549613, 27.641406831471482],
                [85.47272948669493, 27.640204038158423],
                [85.47182391275803, 27.63585917425815],
                [85.47140096325313, 27.63145617337422],
                [85.47146465487279, 27.627037450017045],
                [85.47201431536432, 27.62264556515547],
                [85.47304459226638, 27.618322816095894],
                [85.473910819717, 27.615891971522462],
                [85.47360387043813, 27.615471177200376],
                [85.47122857122716, 27.61282436717176],
                [85.4685258173889, 27.60911872048635],
                [85.46624400137681, 27.605194866531207],
                [85.46440507080234, 27.601090619263115],
                [85.46302669836905, 27.5968455276264],
                [85.46212211311243, 27.592500493800614],
                [85.46169997475005, 27.588097378539018],
                [85.4617642922844, 27.583678597427127],
                [85.46231438756469, 27.57928671197235],
                [85.46334490407516, 27.57496401947866],
                [85.46484586077837, 27.570752145664642],
                [85.46680275040848, 27.56669164394925],
                [85.46726734818088, 27.565940594558313],
                [85.46808876392453, 27.564236068335322],
                [85.47048260541416, 27.560366018112184],
                [85.47329038755095, 27.55672368041147],
                [85.47648504168217, 27.55334411138767],
                [85.48003578400422, 27.55025983395084],
                [85.48390841269374, 27.547500525480366],
                [85.48806563752348, 27.545092733007497],
                [85.49246743877961, 27.54305961857166],
                [85.49707145203244, 27.541420737164223],
                [85.5018333750799, 27.54019184935977],
                [85.50670739318463, 27.53938477040315],
                [85.51164661856394, 27.539007257172553],
                [85.5166035399659, 27.539062934078633],
                [85.52153047807758, 27.539551258590432],
                [85.5263800424613, 27.540467526703715],
                [85.531105585704, 27.54180291828957],
                [85.5356616504916, 27.54354458188469],
                [85.54000440538528, 27.545675758112427],
                [85.54409206517938, 27.548175940558934],
                [85.54788529186048, 27.551021072574812],
                [85.55134757236145, 27.554183778133165],
                [85.55444556951507, 27.557633624551652],
                [85.55714944285401, 27.561337414583754],
                [85.55943313617779, 27.565259505103935],
                [85.56127462911098, 27.569362149356877],
                [85.56234576894317, 27.57265247792518],
                [85.56292526058814, 27.57364751039378],
                [85.56476706535308, 27.57775007202896],
                [85.56614887108591, 27.58199371475701],
                [85.56705732506943, 27.586337589743128],
                [85.56748362665304, 27.590739878974272],
                [85.56742361399137, 27.59515819737533],
                [85.56732863222007, 27.595922471438534],
                [85.56972072853375, 27.597715019593934],
                [85.57318523321432, 27.600876910002963],
                [85.57628538439378, 27.604326009071286],
                [85.5789913208938, 27.608029126807065],
                [85.58127696664849, 27.61195062662153],
                [85.58312028245375, 27.61605276751286],
                [85.58373721994623, 27.617945429031526],
                [85.5838076656363, 27.617870803443772],
                [85.58735678806003, 27.614783899806547],
                [85.59122829457863, 27.612021652417045],
                [85.59538490552289, 27.60961063650182],
                [85.59978660689362, 27.60757404500073],
                [85.604391035085, 27.60593146621858],
                [85.60915388382514, 27.604698696142258],
                [85.61402932945543, 27.6038875871942],
                [85.61897047050647, 27.60350593484553],
                [85.62392977740369, 27.60355740315187],
                [85.62885954804717, 27.6040414899058],
                [85.63371236496025, 27.60495353172481],
                [85.63844154969006, 27.606284749015984],
                [85.6430016101699, 27.60802233038224],
                [85.64734867681811, 27.610149555662716],
                [85.65144092325045, 27.612645956434957],
                [85.65523896762228, 27.61548751245303],
                [85.65870625079184, 27.6186468821555],
                [85.66180938770525, 27.622093665054656],
                [85.66451848864625, 27.625794693515],
                [85.66680744726813, 27.629714351149243],
                [85.66865419262705, 27.633814914804397],
                [85.67004090276728, 27.63805691688397],
                [85.67095417776214, 27.642399524553873],
                [85.67138517049104, 27.64680093221472],
                [85.67132967382716, 27.651218763490522],
                [85.67078816332048, 27.655610478886608],
                [85.66976579488173, 27.659933785208562],
                [85.66827235740297, 27.664147042809603],
                [85.66632218068321, 27.668209666747003],
                [85.66393399946095, 27.672082517979028],
                [85.66113077478441, 27.675728280822074],
                [85.6579394743699, 27.679111823012843],
                [85.65439081400585, 27.682200534881208],
                [85.65051896244925, 27.684964644335707],
                [85.64636121262862, 27.68737750459164],
                [85.64195762230926, 27.689415851832123],
                [85.63735062768811, 27.69106003028016],
                [85.63258463366346, 27.6922941824745],
                [85.62770558476555, 27.693106402878563],
                [85.62276052093553, 27.693488853308523],
                [85.61779712249843, 27.69343783903886],
                [85.61286324879008, 27.692953844828615],
                [85.60800647496592, 27.692041530503918],
                [85.60327363154094, 27.690709686129992],
                [85.5987103511836, 27.688971147202444],
                [85.59436062721366, 27.686842670680804],
                [85.59026638813467, 27.684344773072116],
                [85.58646709236736, 27.681501532145006],
                [85.58299934714363, 27.67834035421106],
                [85.57989655527355, 27.67489170924736],
                [85.57718859321321, 27.671188836447428],
                [85.5749015235426, 27.667267423075472],
                [85.573057344614, 27.663165259756365],
                [85.57244021079063, 27.661272567316818],
                [85.57236973301761, 27.661347191083838],
                [85.56881881825198, 27.664433927980593],
                [85.56494499671219, 27.66719582384332],
                [85.56078558051586, 27.669606253255914],
                [85.55638064367143, 27.67164197589259],
                [85.55177263550907, 27.673283361360678],
                [85.54700597081742, 27.674514579227797],
                [85.54212660067405, 27.675323752365514],
                [85.53718156815796, 27.675703072098056],
                [85.53221855329048, 27.675648874017497],
                [85.53146570137949, 27.675574533735194],
                [85.52971449731425, 27.675864761419362],
                [85.5247693306693, 27.676243643982772],
                [85.51980623035432, 27.676189001281617],
                [85.5148730527883, 27.675701353209867],
                [85.51001736632608, 27.674785394966385],
                [85.50528599086724, 27.673449951879128],
                [85.50072454475799, 27.671707894250304],
                [85.49637700343403, 27.669576013048978],
                [85.49228527413366, 27.667074857662463],
                [85.48848879084545, 27.6642285372901],
                [85.48798563926137, 27.663769059556248],
                [85.48811508089844, 27.664167060576037],
                [85.48902168751766, 27.668511701316877],
                [85.48944570328827, 27.6729145313383],
                [85.48938298809182, 27.677333160222645],
                [85.48883408690611, 27.68172504043752],
                [85.4878042268241, 27.68604787684586],
                [85.48630326898868, 27.69026003398567],
                [85.48434561581868, 27.69432093719922],
                [85.4819500743346, 27.69819146374302],
                [85.47913967682193, 27.701834320098495],
                [85.47594146049003, 27.70521440182927],
                [85.47238620819088, 27.708299132492442],
                [85.46850815265195, 27.71105877830782],
                [85.46434464704446, 27.713466735518313],
                [85.45993580504934, 27.715499787634997],
                [85.45532411389502, 27.71713833004929],
                [85.45055402411799, 27.718366559809333],
                [85.44567152003833, 27.719172628695027],
                [85.44072367514194, 27.719548758083423],
                [85.43575819672022, 27.719491314468396],
                [85.43082296423015, 27.71900084488401],
                [85.43017554518948, 27.718878397167657],
                [85.43033511527904, 27.719369529058536],
                [85.4312402614021, 27.723714740887253],
                [85.43166251596591, 27.728117971506993],
                [85.43159775561742, 27.732536826541306],
                [85.43104654486046, 27.736928756165167],
                [85.43001413289348, 27.74125146464147],
                [85.42851040533644, 27.745463317611282],
                [85.42654979122506, 27.749523743217463],
                [85.42470903990747, 27.752493539046522],
              ],
              [
                [85.78641334470295, 27.630567452926307],
                [85.7863624054439, 27.634984756447103],
                [85.78582556244811, 27.639376343880897],
                [85.78480792667233, 27.643699923490175],
                [85.78331924136634, 27.647913853211634],
                [85.78137379044057, 27.65197754182764],
                [85.7789902629453, 27.655851840215952],
                [85.77619157488762, 27.659499418897266],
                [85.77300465003214, 27.662885128224833],
                [85.76946016173832, 27.66597633772077],
                [85.76559223827674, 27.6687432512594],
                [85.7614381344337, 27.671159195026135],
                [85.75703787255594, 27.67320087543976],
                [85.75243385649829, 27.67484860451382],
                [85.74767046221599, 27.676086490446778],
                [85.742793608984, 27.67690259156739],
                [85.73785031542747, 27.67728903211744],
                [85.73288824470671, 27.67724207872699],
                [85.7279552433139, 27.676762176821136],
                [85.72309887800765, 27.67585394659001],
                [85.71836597543378, 27.67452613855118],
                [85.71380216895399, 27.672791549130103],
                [85.70945145713213, 27.67066689707751],
                [85.70535577820947, 27.668172661927716],
                [85.7015546047356, 27.66533288607408],
                [85.69808456231625, 27.662174942395126],
                [85.69497907619213, 27.658729269701407],
                [85.69226804907893, 27.655029078587354],
                [85.68997757338029, 27.651110030559945],
                [85.6881296805372, 27.647009893574058],
                [85.68674212990292, 27.642768177331664],
                [85.68582823913546, 27.638425751894303],
                [85.6853967576852, 27.634024453315888],
                [85.68545178452935, 27.629606680122947],
                [85.6859927308674, 27.625214984551725],
                [85.68701432805378, 27.620891662495428],
                [85.68850668060414, 27.61667834611979],
                [85.69045536367807, 27.612615603072026],
                [85.6928415640157, 27.60874254613683],
                [85.69564226289401, 27.605096457085246],
                [85.69883045927348, 27.60171242831849],
                [85.7023754309304, 27.5986230257315],
                [85.70624303101854, 27.595857976011484],
                [85.71039601717833, 27.593443881347472],
                [85.71479441001476, 27.59140396426067],
                [85.71939587749901, 27.589757844973754],
                [85.72415614161605, 27.588521353424934],
                [85.72902940338157, 27.58770637769997],
                [85.7339687821886, 27.587320750308635],
                [85.73892676531874, 27.58736817337157],
                [85.74385566336399, 27.58784818341443],
                [85.74870806725532, 27.588756156091453],
                [85.75343730258213, 27.590083350782788],
                [85.75799787691318, 27.591816994633692],
                [85.76234591589423, 27.59394040523125],
                [85.76643958399973, 27.5964331507497],
                [85.77023948595448, 27.59927124604146],
                [85.77370904501623, 27.60242738281112],
                [85.77681485451912, 27.605871191686663],
                [85.77952699931987, 27.609569533699098],
                [85.78181934406253, 27.61348681840136],
                [85.78366978547963, 27.617585345602023],
                [85.78506046627756, 27.621825667462208],
                [85.78597794850808, 27.626166967505547],
                [85.78641334470295, 27.630567452926307],
              ],
              [
                [85.44094172406477, 27.51232940915786],
                [85.44087618427632, 27.516748305773408],
                [85.44032516205898, 27.52114019744618],
                [85.43929390543009, 27.525462788874442],
                [85.4377922894789, 27.52967444693878],
                [85.43583472343903, 27.533734601809442],
                [85.4334400139303, 27.53760413800891],
                [85.43063118560906, 27.541245771650473],
                [85.42743526088569, 27.54462441019899],
                [85.42388300077376, 27.54770749126285],
                [85.4200086093244, 27.550465297121953],
                [85.41584940446515, 27.55287124192677],
                [85.41144545840378, 27.554902128763725],
                [85.40683921106738, 27.556538374071405],
                [85.40207506032439, 27.557764197206634],
                [85.39719893297652, 27.558567773297668],
                [85.39225784070742, 27.558941347877983],
                [85.38729942533243, 27.558881312167614],
                [85.38237149780657, 27.558388238253695],
                [85.37752157551422, 27.557466873814857],
                [85.37279642238497, 27.556126096431313],
                [85.36824159635192, 27.554378827919606],
                [85.36390100859545, 27.552241909523577],
                [85.35981649889415, 27.549735939178106],
                [85.3560274312414, 27.546885072434012],
                [85.35257031367667, 27.543716788988952],
                [85.34947844603438, 27.540261627105334],
                [85.34678159902755, 27.53655288850922],
                [85.34450572776464, 27.532626316651164],
                [85.34267272244942, 27.528519751466828],
                [85.34130019863865, 27.524272764001353],
                [85.34040132903533, 27.519926274452786],
                [85.33998471838177, 27.51552215734621],
                [85.34005432258895, 27.51110283766924],
                [85.34060941280424, 27.50671088188048],
                [85.3416445846797, 27.50238858774563],
                [85.34314981266559, 27.498177576959357],
                [85.34511054871997, 27.49411839447698],
                [85.34750786440118, 27.49025011840777],
                [85.35031863489898, 27.486609984212475],
                [85.3535157631661, 27.483233026803426],
                [85.35706844193713, 27.480151743967053],
                [85.36094245107182, 27.477395784318592],
                [85.36510048733444, 27.47499166275871],
                [85.36950252342555, 27.472962506134632],
                [85.37410619281694, 27.471327831516586],
                [85.37886719670915, 27.470103359186886],
                [85.38373972923229, 27.46930086210649],
                [85.38867691685, 27.46892805327606],
                [85.39363126780076, 27.46898851204815],
                [85.39855512732343, 27.469481650077586],
                [85.40340113436503, 27.470402717221855],
                [85.40812267545704, 27.471742847325665],
                [85.41267433147509, 27.47348914344717],
                [85.41701231306077, 27.475624801711042],
                [85.42109488058901, 27.47812927260868],
                [85.4248827447029, 27.480978458212306],
                [85.42833944361402, 27.484144943429573],
                [85.43143169357623, 27.487598259103017],
                [85.43412970918386, 27.491305174455352],
                [85.4364074904196, 27.495230016102195],
                [85.43824307368027, 27.49933501059883],
                [85.43961874434017, 27.50358064726067],
                [85.44052120876468, 27.50792605780017],
                [85.44094172406477, 27.51232940915786],
              ],

              [
                [
                  [85.27153588646277, 27.601749618257237],
                  [85.27154315985678, 27.60420022681319],
                  [85.27212890997521, 27.602565647003463],
                  [85.27153588646277, 27.601749618257237],
                ],
              ],
            ],
          },
        },
      });
      map.current.addLayer({
        id: "maine",
        type: "fill",
        source: "maine",
        layout: {},
        paint: {
          "fill-color": "red",
          "fill-opacity": 0.6,
        },
      });
    });
    function updateArea(e) {
      const data = draw.getAll();
      setBoundData(data);
      console.log(data);
    }
  });
  function sendData() {
    console.log("here we are");
    navigate("/solution");
  }
  console.log(boundData);

  const [school, setSchool] = useState(false);
  const [hospital, setHospital] = useState(false);

  let firstPageAc = 0;
  let secondPageAc = 1;

  return (
    <>
      {/* Navigation Bar */}
      <Nav />
      {/* Timer Page */}
      {/* {timerPage ? <Spinner /> : <div />} */}
      {/* Button At bottom */}
      <button className="buttonClass" onClick={sendData}>
        {firstPageAc
          ? "Analyse Sustainablity"
          : secondPageAc
          ? "Show the Solution"
          : "Go To Selector"}
      </button>
      {/* Map */}
      <div
        style={{
          position: "absolute",
          height: "92.55vh",
          width: "100vw",
        }}
        ref={mapContainer}
        className="map-container"
      ></div>
      {/* Left Container */}
      {firstPageAc === 0 ? (
        <div className="data-list">
          <div className="heading">
            <h2>{secondPageAc ? "Current Locations" : "Proposed Locations"}</h2>
          </div>
          <ul className="list">
            {locLists.map((data, index) => (
              <li key={index}>
                <div className="data-item">
                  <a>{data.properties.name}</a>
                  <p>{data.properties.address}</p>
                  <b>{data.properties.phone}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
      {/* Selector || Checkbox */}
      <div className={firstPageAc ? "checkbox active" : "checkbox"}>
        <div className="topic">
          <h3>{firstPageAc ? "What data you want to analyse ?" : "Select"}</h3>
        </div>
        <div className="checkboxs">
          <div className="hospitalCheck">
            <input
              type="checkbox"
              id="hospital"
              name="hospital"
              value="hospital"
              onChange={(e) => {
                if (e.target.value === "hospital") {
                  setHospital(true);
                } else {
                  setHospital(false);
                }
              }}
            />
            <label for="hospital" className="hospital">
              {" "}
              Hospital
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="school"
              name="school"
              value="school"
              onChange={(e) => {
                if (e.target.value === "school") {
                  setSchool(true);
                } else {
                  setSchool(false);
                }
              }}
            />
            <label for="school"> School </label>
          </div>
        </div>
      </div>
      {/* Conclusion Box */}
      <div className={firstPageAc !== 0 ? "conclusion" : "conclusion active"}>
        <h2>Valididty</h2>
        <div>
          <h3>Area covered percentage: 42.00346</h3>
          <h3>ABuilding covered percentage: 65.535</h3>
        </div>
      </div>
    </>
  );
}
