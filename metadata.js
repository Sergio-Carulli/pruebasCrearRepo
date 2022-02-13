const fs = require('fs');

var inputFile = "pruebaMetadata.txt";
var outputFile = "pruebaEscribirMetadata.ttl";
var archivo = fs.readFileSync(inputFile,"utf-8");
var lines = archivo.split('\n');
var content = [];
var aux;
var ontology = "<http://www.studyroomsmadrid.es/studyRoom/ontology/studyOnt>";

for(line = 0; line<lines.length;line++){
    if(lines[line].startsWith("License")){
        content.push(`${ontology} dcterms:license <http://purl.org/dc/terms/1.0.0> .`);
    }
    else if(lines[line].startsWith("Creator")){
        content.push(`${ontology} dcterms:creator <http://purl.org/dc/terms/creator> .`);
    }
    else if(lines[line].startsWith("Contributor")){
        content.push(`${ontology} dcterms:contributor <http://purl.org/dc/terms/contributor> .`);
    }
    else if(lines[line].startsWith("Creation date")){
        content.push(`${ontology} dcterms:created .`);
    }
    else if(lines[line].startsWith("Previous version")){
        content.push(`${ontology} owl:priorVersion .`);
    }
    else if(lines[line].startsWith("Namespace URI")){
        content.push(`${ontology} vann:preferredNamespaceUri ${ontology}/prefix.`);
    }
    else if(lines[line].startsWith("Version IRI")){
        content.push(`${ontology} owl:versionIRI ${ontology} .`);
    }
    else if(lines[line].startsWith("Prefix")){
        content.push(`${ontology} vann:preferredNamespacePrefix "prefix".`);
    }
    else if(lines[line].startsWith("Title")){
        content.push(`${ontology} dcterms:title "" title.`);
    }
    else if(lines[line].startsWith("Description")){
        content.push(`${ontology} dcterms:description "descripcion".`);
    }
    else if(lines[line].startsWith("Citation")){
        content.push(`${ontology} dcterms:bibliographicCitation .`);
    }
    /*
    else if(lines[line].startsWith("Abstract")){
        content.push(`${ontology} dcterms:abstract .`);
    }
    else if(lines[line].startsWith("See also")){
        content.push(`${ontology} rdfs:seeAlso .`);
    }
    else if(lines[line].startsWith("Status")){
        content.push(`${ontology} sw:status .`);
    }
    else if(lines[line].startsWith("Backward compatibility ")){
        content.push(`${ontology} owl:backwardCompatibility  .`);
    }
    else if(lines[line].startsWith("Incompatibility")){
        content.push(`${ontology} owl:incompatibleWith .`);
    }
    else if(lines[line].startsWith("Modification Date")){
        content.push(`${ontology} dcterms:modified .`);
    }
    else if(lines[line].startsWith("Issued date")){
        content.push(`${ontology} dcterms:issued .`);
    }
    else if(lines[line].startsWith("Source")){
        content.push(`${ontology} dcterms:source .`);
    }
    else if(lines[line].startsWith("Publisher")){
        content.push(`${ontology} dcterms:published .`);
    }
    else if(lines[line].startsWith("DOI")){
        content.push(`${ontology} bibo:doi .`);
    }
    else if(lines[line].startsWith("Logo")){
        content.push(`${ontology} foaf:logo .`);
    }
    else if(lines[line].startsWith("Diagram")){
        content.push(`${ontology} foaf:depiction .`);
    }
    */
}

var texto = content.join("\n");
console.log(texto);