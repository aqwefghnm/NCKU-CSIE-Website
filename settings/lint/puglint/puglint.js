module.exports = {
    disallowAttributeConcatenation:true,
    disallowBlockExpansion:true,
    disallowClassLiteralsBeforeIdLiterals:true,
    disallowClassLiterals: true,
    disallowDuplicateAttributes: true,
    disallowHtmlText: true,
    disallowIdLiterals: true,
    disallowLegacyMixinCall: true,
    disallowMultipleLineBreaks: true,
    disallowSpecificTags: ['div','font','embed','strike','s',
        'u','applet','basefont','center','dir',
        'isindex','listing','menu','plaintext','xmp',
        'b','i'],
    disallowStringConcatenation: true,
    disallowTrailingSpaces: true,
    maximumLineLength: 80,
    requireClassLiteralsBeforeAttributes: true,
    requireIdLiteralsBeforeAttributes: true,
    requireLineFeedAtFileEnd: true,
    requireLowerCaseAttributes: true,
    requireLowerCaseTags: true,
    requireSpaceAfterCodeOperator: true,
    requireSpacesInsideAttributeBrackets: true,
    requireStrictEqualityOperators: true,
    validateAttributeQuoteMarks: '\'',
    validateAttributeSeparator: { 
        'separator': ', ',
        'multiLineSeparator': '\n  ',
    },
    validateExtensions: true,
    validateIndentation: 2,
    validateLineBreaks: 'LF',
    validateSelfClosingTags: true,
    validateTemplateString: ['concatenation'],

};
