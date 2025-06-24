package com.xxxx.techjobusa.api;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdzunaAPI {
    @Builder.Default
    private  String defaultUrl = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=3a5c3e0d&app_key=3a5c3e0d";
    @Builder.Default
    private  String baseUrl = "https://api.adzuna.com/v1/api/jobs/";
    @Builder.Default
    private  String app_id = "6ddc0eff";
    @Builder.Default
    private  String app_key = "b5eb1040fb7ddea6fbc9a13a891f1f6e";
    @Builder.Default
    private  String country = "us";
    @Builder.Default
    private  String currentPage = "1";
    @Builder.Default
    private  String resultsPerPage = "30";
    @Builder.Default
    private  String what = "software+engineer";
    @Builder.Default
    private  String where = "usa";

    public String getUrl() {
        return baseUrl + country + "/search/" + currentPage +
                "?app_key=" + app_key +
                "&app_id=" + app_id +
                "&results_per_page=" + resultsPerPage +
                "&what=" + what +
                "&where=" + where;
    }
}
