Feature: Register Station Positive

    Scenario Outline: Validate an attempt to register a weather station
        Given I post the "<requestfile>" to "<url>" using "<apikey>" and record response "<alias>"
        Then I verify that for sent request "@<alias>" HTTP response code is "<http_code>"
        Then I write response body captured in "@<alias>" to a "<responsefile>" file
        Then I verify that for sent request "@<alias>" HTTP response body contains "<responsefile>"
        Examples:
            | requestfile    | url       | apikey                           | alias                  | responsefile   | http_code |
            | /samplerequest | /stations | 21af2e8cd45ce60ed8d5be73de452089 | registerStationSuccess | sampleresponse | 201       |




    Scenario Outline: Verify that the stations were successfully stored in the DB
        Given I get "<url>" using "<apikey>" and record response "getresp"
        Then I verify that for sent request "@<alias>" HTTP response code is "200"
        Then I verify that for sent request "@<alias>" HTTP response body contains "<responsefile>"
        Examples:
            | requestfile    | url                                | apikey                           | alias   | responsefile       |
            | /samplerequest | /stations/611f2b6409e7430001b9faf1 | 21af2e8cd45ce60ed8d5be73de452089 | getresp | sampleresponse_get |

    Scenario Outline: Validate an attempt to register a weather station -Invalid Scenarios
        Given I post the "<requestfile>" to "<url>" using "<apikey>" and record response "<alias>"
        Then I verify that for sent request "@<alias>" HTTP response code is "<http_code>"
        Then I verify that for sent request "@<alias>" HTTP response body contains "<responsefile>"
        Examples:
            | requestfile    | url              | apikey                           | alias                  | responsefile | http_code |
            | /samplerequest | /stations        |                                  | registerStationSuccess | unauthorised | 401       |
            | /samplerequest | /stations/123213 | 21af2e8cd45ce60ed8d5be73de452089 | registerStationSuccess | notfound     | 405       |
            | /wrongbodypost | /stations        | 21af2e8cd45ce60ed8d5be73de452089 | registerStationSuccess | error-400    | 400       |
