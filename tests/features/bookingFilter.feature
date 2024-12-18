@bookingFilter
Feature: Find Cruise Filter Tests

# Scenario: Filter Cruises by Destination '<DestinationName>'
#     Given I navigate successfully to production
#     When I click the Find Cruise button
#     And The cruise search page will be displayed successfully
#     # And The filtered view results will return '775' cruises
#     And I search for a cruise by Destination '<DestinationName>'
#     Then The filtered view results will return '<expectedCruises>' cruises
# Examples:
#     |DestinationName|expectedCruises|
#     |Alaska|27|
#     |Asia|27|
#     |Australia & New Zealand|101|
#     |California Coast|21|
#     |Canada & New England|10|
#     |Caribbean|158|
#     |Europe|142|
#     |Hawaii|7|
#     |Japan|80|
#     |Mexico|9|
#     |Panama Canal|41|
#     |South America & Antarctica|11|
#     |Tahiti & South Pacific|41|
#     |Trans-Atlantics|41|
#     |World Cruises|58|

# Scenario: Filter Cruises by Length '<Length>'
#     Given I navigate successfully to production
#     When I click the Find Cruise button
#     And The cruise search page will be displayed successfully
#     # And The filtered view results will return '775' cruises
#     And I search for a cruise by Length '<Length>'
#     Then The filtered view results will return '<expectedCruises>' cruises
# Examples:
#     |Length|expectedCruises|
#     |1-5 Days|40|
#     |6-8 Days|141|
#     |9-15 Days|297|
#     |16+ Days|289|

# Scenario: Filter Cruises by Port Name '<PortName>'
#     Given I navigate successfully to production
#     When I click the Find Cruise button
#     And The cruise search page will be displayed successfully
#     # And The filtered view results will return '775' cruises
#     And I search for a cruise by Port Name '<PortName>'
#     Then The filtered view results will return '<expectedCruises>' cruises
# Examples:
#     |PortName|expectedCruises|
#     |Anchorage (Whittier), Alaska|1|
#     |Boston, Massachusetts|3|
#     |Ft. Lauderdale, Florida|133|
#     |Galveston, Texas|12|
#     |Honolulu, Hawaii|5|
#     |Los Angeles, California|43|
#     |New York City (Manhattan or Brooklyn), New York|13|
#     |Port Canaveral (Orlando), Florida|28|
#     |Quebec City, Canada|2|
#     |San Francisco, California|18|
#     |Seattle, Washington|11|
#     |Vancouver, Canada|25|
#     |Buenos Aires, Argentina|8|
#     |San Antonio (for Santiago), Chile|4|
#     |San Juan, Puerto Rico|27|
#     |Athens (Piraeus), Greece|17|
#     |Barcelona, Spain|27|
#     |Civitavecchia (for Rome), Italy|37|
#     |Copenhagen, Denmark|3|
#     |Dover (for London), England|8|
#     |Naples, Italy (for Capri & Pompeii)|4|
#     |Southampton (for London), England|69|
#     |Trieste (for Venice), Italy|3|
#     |Hong Kong|1|
#     |Istanbul, Turkey|3|
#     |Singapore|15|
#     |Tokyo (Yokohama), Japan|88|
#     |Tokyo, Japan|1|
#     |Adelaide, Australia|7|
#     |Auckland, New Zealand|18|
#     |Brisbane, Australia|32|
#     |Hobart, Australia|4|
#     |Melbourne, Australia|6|
#     |Perth (Fremantle), Australia|8|
#     |Sydney, Australia|85|

Scenario: Filter Cruises by Ship Name '<ShipName>'
    Given I navigate successfully to production
    When I click the Find Cruise button
    And The cruise search page will be displayed successfully
    # And The filtered view results will return '775' cruises
    And I search for a cruise by Ship Name '<ShipName>'
    Then The filtered view results will return '<expectedCruises>' cruises
Examples:
    |ShipName|expectedCruises|
    |Caribbean Princess|37|
    |Diamond Princess|100|
    |Enchanted Princess|38|
    |Majestic Princess|70|
    |Ruby Princess|19|
    |Star Princess|25|
#     |Coral Princess|45|
#     |Discovery Princess|35|
#     |Grand Princess|66|
#     |Regal Princess|41|
#     |Sapphire Princess|34|
#     |Sun Princess|75|
#     |Crown Princess|130|
#     |Emerald Princess|32|
#     |Island Princess|43|
#     |Royal Princess|42|
#     |Sky Princess|64|

# Scenario: Filter Cruises by each Destination
#     Given I navigate successfully to production
#     When I click the Find Cruise button
#     And The cruise search page will be displayed successfully
#     And The filtered view results will return '767' cruises
#     Then Each cruise filtered by Destination has the correct number of cruises returned

