from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

result = ""
result_data = []


@app.route('/translationKhmer', methods=['POST'])
def translateKhmerToBraille(uploaded_text):

    
    khmer = ['ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ', 'ឈ', 'ញ', 'ដ', 'ឋ', 'ឌ', 'ឍ', 'ណ', 'ត', 'ថ', 'ទ', 'ធ', 'ន', 'ប', 'ផ', 'ព', 'ភ', 'ម', 'យ', 'រ', 'ល', 'វ', 'ស', 'ហ', 'ឡ', 'អ', 'ា', 'ិ', 'ី', 'ឹ', 'ឺ', 'ុ', 'ូ', 'ួ', 'ើ', 'ឿ', 'ៀ', 'េ', 'ែ', 'ៃ', 'ោ', 'ៅ', 'ុំ', 'ំ', 'ាំ', 'ះ', 'ុះ', 'េះ', 'ោះ', 'ែះ', 'ើះ', 'ាះ', 'អ', 'អា', 'ឥ', 'ឦ', 'ឧ', 'ឩ', 'ឪ', 'ឫ', 'ឬ', 'ឭ', 'ឮ', 'ឯ', 'ឰ', 'ឱ','ឲ', 'ឳ', '៉', '៊', '៍', '់', '័', '៏', '៌', 'ៈ', 'ៗ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩', '។ល។', '។', '>', '<', '?', '!', '=', '៕', '...', 'a', '{', '}', '[', ']', '៖', 'x', 'b', 'c', 'd', 'e', 'f', '', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',')', '(', '«', '»', '.', '៎','!',',','`']
    english = ['g', 'k', ',g', ',k', ']', 'j', '+', ',j', ',+', ',?', 'd', '-)', ',d', '0)', 'n', 't', ')', ',t', ',)', ',n', 'b', 'p', '&', ',p', 'm', ',y', 'r', ',l', 'w', 's', 'h', 'l', 'o', '*', '/', 'e', '[', '5', 'c', '3', '2', '%', 'q', '(', 'f', '<', 'i', ':', '_', '$', 'y', 'z', 'a', 'x', 'u', '!', '<a', '%a', '*a', 'o', 'o*', ',/', 'ea', 'ca', ',3', '\\', ',x', 'xa', '?', '?a', '"', 'fa', ':a',':a', '_c', '@', '-', '0', '9', '>', "'", '7', '^', '1', 'j', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', '=,l=', '=', '$.1', '$"k', '8', '6', '.k', '=,', "'''", 'v', '.(', '.)', '@(', '@)', './', '/@>', '!', 'u', 'x', '$', 'z', '' , '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ')', '(', '8', '0', '4','+','6',',','`']

    symbol = ['∈', 'Ǝ', '∀', '&', '∉', '≎', '⊆', '∅', '∨', '∧', '∩', '∪', '⊥', '∆', '⇔', '∠',  '∥', '\\', '/', '→', '←', '⊂', '⊃', '≠', '✴', '✩', '∞', '<', '>', '≼', '≽', '~', '≈', '≃', '≅', '≪', '≫', '╫', 'π', '∫', 'б', '∑', '⌗',  'β', 'Δ', 'α', 'Ω', 'μ', 'ε', 'θ', 'ω', 'λ', 'γ', 'ρ','°','φ', 'ø', 'τ', 'Ο', '↖', '↗', '↙', '↘', '↺', '↻', '⇒', '⇄', '⇆', '⇵', '⇅', '⟷', '⇢', '⇠', '⟶', '↔', '→', '←', '⟼','⌒','⌣',';','Å','ˈ','ℝ','ℕ','ℤ','^','+','ℚ','𝔽','ℂ','\'','"','ö','ο','%','‰','$','⋀','|','£','@','✗',':','-','✓','√','∛','𝒥','𝒩','🅐','⑤','_']
    symbolEng = ['@e', '@=', '@&', '_&', '/@e','@<,<','_"k:','_0','@+','@%','.%','.+','$p','$t','${77o','${','$l','_*','_/','$o','${33','_"k','_.1','/.k','`#','$s',',=','"k','.1','"k:','.1:','@:','@:@:',' @::','@:.k','"k@"k]','.1`.1]','/$l','.p','!','.s','.,s','.#','.b','.,d','.a','.w','.m','.e','.?','.w','.l','.g','.r','.* ;,','.`f','.f','.t','=','$^[33','$^3o','$;[33','$;33o','$59o','$[59','$77o','$33o$[33','$[33$33o','$%33o"$<33o','$<33o"$%33o','$[33o','$111o','$[111','$33o','${3o','$o','${33','$|33o','$a','$\'','2','@,a','\'','|,r','|,n','|,z^','^','+','|,q','|,f','|,c','\'','"','"o<**}','0','@0','`00','@s','.$[','|','`l','@a','/`>','^','3','`>','>]','3>]','.j','.n','$c_$,a]','$c_$#5]','-']
    dictionarySymbol = dict(zip(symbol, symbolEng))
    dictionaryKhmer = dict(zip(khmer, english))  

    dictionary = dictionarySymbol.copy()
    dictionary.update(dictionaryKhmer)

    def change_dict_key(d, old_key, new_key, default_value=None):
        d[new_key] = d.pop(old_key, default_value)
    dictionary['\n'] = '\n'
    dictionary['\t'] = '\t'
    dictionary['\r'] = '\r'
    dictionary['\u200b']= ' '
    dictionary[' ']= ' '

    def convertKhToEng(b):
        convertedText = ''
        for character in b:
            if character == "្":
                character="v"
            convertedText += dictionary.get(character, '8 gyhcs 0')
        return convertedText
    
    
    characterUnicodes = {'a': '\u2801', 'b': '\u2803','c': '\u2809', 'd': '\u2819', 'e': '\u2811','f': '\u280B','g': '\u281B','h': '\u2813','"':'\u2811',
                        'i': '\u280A','j': '\u281A','k': '\u2805', 'l': '\u2807','m': '\u280D', 'n': '\u281D','o': '\u2815','p': '\u280F',
                        'q': '\u281F','r': '\u2817','s': '\u280E','t': '\u281E',  'u': '\u2825', 'v': '\u2827','w': '\u283A','x': '\u282D',
                        'y': '\u283D','z': '\u2835','%':'\u2829','+':'\u282C',"=":"\u283F","'": '\u2804', ',': '\u2820', '-': '\u2824','^':'\u2818',
                        '/': '\u280C', '!' : '\u282E', '?': '\u2839', '$': '\u282B', ':': '\u2831',';': '\u2830', '(': '\u2837', ')': '\u283E','|':'\u2833',
                        ' ': '\u2800', '@':'\u2808', '>':'\u281C', '<':'\u2823', '_': '\u2838', '#': '\u283C','[':'\u282A', ']':'\u283B','`':'\u2808','}':'\u283b',
                        '"':'\u2810', '&':'\u282F','^':'\u2818','1': '\u2802', '2': '\u2806', '3': '\u2812', '4': '\u2832','5': '\u2822', '6': '\u2816','{':'\u282a',
                        '7': '\u2836', '8': '\u2826', '9': '\u2814', '0': '\u2834','.':'\u2828','*':'\u2821', '[': '\u282A', ']':'\u283B','\\':'\u2833','ˈ':'\u02c8'}
    escapeCharacters = ['\n', '\r', '\t']
    
    def convertText(textToConvert):
        if type(textToConvert) is not str:
            raise TypeError("Only strings can be converted")
        return convert(textToConvert)
    def convert(textToConvert):
        isNumber = False
        convertedText = ''
        for character in textToConvert:
            if character in escapeCharacters:
                convertedText += character
                continue
            else:
                isNumber = False
            convertedText += characterUnicodes.get(character, '<unknown>')
        return convertedText
    KHCONST = set(u'កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវឝឞសហឡអឣឤឥឦឧឨឩឪឫឬឭឮឯឰឱឲឳ')
    KHVOWEL = set(u'឴឵ាិីឹឺុូួើឿៀេែៃោៅ\u17c6\u17c7\u17c8')
    ENGCONST = set(u'Eabcdefghijklmnopqrstuvwxyz')
    # subscript, diacritics
    KHSUB = set(u'្')
    KHDIAC = set(u"\u17c9\u17ca\u17cb\u17cc\u17cd\u17ce\u17cf\u17d0") #MUUSIKATOAN, TRIISAP, BANTOC,ROBAT,
    KHSYM = set('៕។៛ៗ៚៙៘,.?') # add space
    KHNUMBER = set(u'០១២៣៤៥៦៧៨៩0123456789') # remove 0123456789
    ENGNUMBER = set(u'0123456789')
    # lunar date:  U+19E0 to U+19FF ᧠...᧿
    KHLUNAR = set('᧠᧡᧢᧣᧤᧥᧦᧧᧨᧩᧪᧫᧬᧭᧮᧯᧰᧱᧲᧳᧴᧵᧶᧷᧸᧹᧺᧻᧼᧽᧾᧿')
    KHSYMBOL = set(u')(][!@#$%^&*{}+-=ˈ_')
    def is_khmer_char(ch):
        if ('\u0041' <= ch <= '\u007A') or ('\u1780' <= ch <= '\u17FF'): return True
        if ch in KHSYM: return True
        if ch in KHLUNAR: return True
        if ch in KHSYMBOL: return True 
        if ch in ENGNUMBER: return True
        return False

    def is_start_of_kcc(ch):
        if is_khmer_char(ch):
            if ch in KHCONST: return True
            if ch in KHSYM: return True
            if ch in KHNUMBER: return True
            if ch in KHLUNAR: return True
            if ch in ENGCONST: return True
            if ch in KHSYMBOL: return True
            if ch in ENGNUMBER: return True
            return False
        return True

    # kcc base - must surround space with \u200b using cleanupstr()
    def seg_kcc(str_sentence):
        if str_sentence is None:
            print("str_sentence is None")
            return []
    
        segs = []
        cur = ""
        sentence = str_sentence
       
        for word in sentence.split('\u200b'):
            for i,c in enumerate(word):
                cur += c
                nextchar = word[i+1] if (i+1 < len(word)) else ""

                # cluster non-khmer chars together
                if not is_khmer_char(c) and nextchar != " " and nextchar != "" and not is_khmer_char(nextchar):
                    continue
                # cluster number together
                if c in KHNUMBER and nextchar in KHNUMBER :
                    continue
                if not is_khmer_char(c) or nextchar==" " or nextchar=="":
                    segs.append(cur)
                    cur=""
                elif is_start_of_kcc(nextchar) and not (c in KHSUB):
                    segs.append(cur)
                    cur=""
        return segs 
    def Khmer_to_Braille(Khmer_sentence):
        KCC_Segmentation = seg_kcc(Khmer_sentence)
        text1 = ''
        text = []
        for index, element in enumerate(KCC_Segmentation):
            if element == "."  and index + 1 < len(KCC_Segmentation) and KCC_Segmentation[index + 1].isdigit():
                data = element + KCC_Segmentation[index + 1]
                del KCC_Segmentation[index + 1]
                text.append(data)
                continue
            if element == ":" and index + 1 < len(KCC_Segmentation) and KCC_Segmentation[index + 1].isdigit():
                data =  element + ' ' + KCC_Segmentation[index + 1]
                del KCC_Segmentation[index + 1]
                text.append(data)
                continue
            if (element.isnumeric() and element != '⑤' and element != '🅐'):
                element = "#" + element
                text.append(element)
                continue 
            # check . in front of p'
            if element == 'p' and (index + 1 < len(KCC_Segmentation) and (KCC_Segmentation[index + 1] == '\'' or KCC_Segmentation[index + 1] == '\'\'' )):
                element = "," + element
                text.append(element)
                continue 
            # check . in front of F'(x), F''(x), F'''(x)
            if element == 'F' and ((index + 1 < len(KCC_Segmentation) or index - 1 >= 0 )and (KCC_Segmentation[index + 1 ] == 'ˈ' or KCC_Segmentation[index + 1 ] == '(')):
                element = "," + element
                text.append(element)
                continue    
            # check ⠘ in front of (4) in F(4)(x)
            if element == '(' and ((index + 1 < len(KCC_Segmentation) and index - 1 >= 0 ) and (KCC_Segmentation[index + 1] == '4' and KCC_Segmentation[index - 1] == 'F' )):
                element = "^" + element
                text.append(element)
                continue 
            # check ⠐ in front of (x) in F(4)(x), F'+(4), F'-(4)
            if element == '(' and ((index + 1 < len(KCC_Segmentation) and index - 1 >= 0) and KCC_Segmentation[index + 1] == 'x' and ((KCC_Segmentation[index - 1] == ')' or KCC_Segmentation[index - 1] == '+' or KCC_Segmentation[index - 1] == '-'))):
                element = '"' + element
                text.append(element)
                continue 
            # check ⠆ in front of + or - of F'+(4), F'-(4)
            if (element == '+' or element == '_')and (index + 1 < len(KCC_Segmentation) or index - 1 >= 0 ) and (KCC_Segmentation[index - 1] == 'ˈ'):
                element = ';' + element
                text.append(element)
                continue
            
            if element == 'M' and (index + 1 < len(KCC_Segmentation) and (KCC_Segmentation[index + 1] == 'o' or KCC_Segmentation[index + 1] == 'e')):
                element = "," + element
                text.append(element)
                continue 
            if element == 'P' and index + 1 < len(KCC_Segmentation) :
                # if (KCC_Segmentation[index] == 'p'):
                if KCC_Segmentation[index + 1] == '(' and KCC_Segmentation[index + 2] == 'E':
                    print(KCC_Segmentation[index-1])
                    element = "," + element
                    text.append(element)
                    continue 
            if element == '!' and (index + 1 < len(KCC_Segmentation) or index - 1 >= 0) and KCC_Segmentation[index - 1].isnumeric():
                element = 'ព'
                text.append(element)
                continue 
            totalWord = []


            for y in element:
                totalWord.append(y)
                lenTotalWord = len(totalWord)
                word1 = ['ៃ','ែ', 'េ', 'ើ']
                word2 = '្'
                word3 = 'រ'
                word8 = '\''
                word9 = 'Ǝ'
                w1 = 'ោ'
                w2 = 'ះ'
                r1 = 'ុ'
                r2 = 'ះ'
                s1 = 'េ'
                s2 = 'ះ'
                d1 = 'ំ'
                d2 = 'ុ'
                l1 = 'ា'
                l2 = 'ំ'
                if(w1 in totalWord and w2 in totalWord):
                    totalWord.remove(w2)
                    totalWord.remove(w1)
                    totalWord.insert(lenTotalWord-1, '!')
                if(r1 in totalWord and r2 in totalWord):
                    totalWord.remove(r1)
                    totalWord.remove(r2)
                    totalWord.insert(lenTotalWord-1, 'x')
                if(s1 in totalWord and s2 in totalWord):
                    totalWord.remove(s1)
                    totalWord.remove(s2)
                    totalWord.insert(lenTotalWord-1, 'u')
                if(d1 in totalWord and d2 in totalWord):
                    totalWord.remove(d1)
                    totalWord.remove(d2)
                    totalWord.insert(lenTotalWord-1, '$')
                if(l1 in totalWord and l2 in totalWord):
                    totalWord.remove(d1)
                    totalWord.remove(l1)
                    totalWord.insert(lenTotalWord-1, 'z')
                if(word9 in totalWord and word8 in totalWord):
                    totalWord.remove(word9)
                    totalWord.remove(word8)
                    totalWord.insert(lenTotalWord-1, 'Ǝ|')
                

                if word2 in totalWord and word3 in totalWord:
                    totalWord.remove(word2)
                    totalWord.remove(word3)
                    totalWord.insert(0, word2)
                    totalWord.insert(1, word3)
                    if totalWord.count(word2) == 2 and word3 in totalWord:
                        first_index_word2 = totalWord.index(word2)
                        second_index_word2 = totalWord.index(word2, first_index_word2 + 1)
                        second = totalWord.pop(second_index_word2)
                        totalWord.insert(3, second)

                # if("." in totalWord):
                #     totalWord.insert(lenTotalWord-1, ' ')
                for n in word1:
                    if(n in totalWord):
            
                        totalWord.remove(n)
                        totalWord.insert(0, n)
                    elif(word2 in totalWord and word3 in totalWord and n in totalWord):
                
                        totalWord.remove(n)
                        totalWord.remove(word2)
                        totalWord.remove(word3)
                        totalWord.insert(0, n)
                        totalWord.insert(1, word2)
                        totalWord.insert(2, word3)
                    else:
                        continue
            
            text.append(totalWord)
        eng = ''
        kh = ''
        for n in text:
            for j in n:
                kh+=j
                eng1 = convertKhToEng(j)
                eng +=eng1
                braille = convertText(convertKhToEng(j))
                text1+=braille
        # print(eng)
        # print(kh)
        # print(text1)
        return (text1)
        
    
    text_result = (Khmer_to_Braille(uploaded_text))
    return text_result;

def createUnicode():
    characterUnicodes = ['\u2801','\u2803','\u2809', '\u2819', '\u2811','\u280B','\u281B','\u2813',
                        '\u281F','\u2817','\u280E','\u281E',  '\u2825', '\u2827','\u283A', '\u282D',
                        '\u280A','\u281A','\u2805', '\u2807','\u280D', '\u281D', '\u2815','\u280F',
                        '\u283D','\u2835','\u2829','\u282C',"\u283F",'\u2804', '\u2820', '\u2824',
                        '\u280C', '\u282E', '\u2839', '\u282B', '\u2831','\u2830', '\u2837',  '\u283E',
                        '\u2800', '\u2808','\u281C','\u2823', '\u2838', '\u283C','\u282A', '\u283B',
                    '\u2810','\u282F','\u2818','\u2802', '\u2806', '\u2812',  '\u2832','\u2822',  '\u2816',
                        '\u2836', '\u2826',  '\u2814', '\u2834','\u2828','\u2821', '\u282A', '\u283B','\u2833']
    return characterUnicodes; 

if __name__ == '__main__':
    app.run(debug=True)
