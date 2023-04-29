import * as fastXmlParser from "fast-xml-parser";

export default class ServiceXMLParser {
  private static options: Partial<fastXmlParser.XmlBuilderOptions> = {
    ignoreAttributes: false,
    attributeNamePrefix: "@",
  };

  /**
   * XML Tool function that parses a given XML string to JSON given a generic return structure.
   * @param inputXmlString
   * @returns type from generic input
   */
  public static parseFromXmlStringToJson<T>(inputXmlString: string): T {
    return new fastXmlParser.XMLParser(ServiceXMLParser.options).parse(
      inputXmlString
    );
  }
}
