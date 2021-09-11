function csrfToken() {
    return function(e) {
        var t = null;
        if (document.cookie && "" != document.cookie)
            for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                var s = jQuery.trim(i[a]);
                if (s.substring(0, e.length + 1) == e + "=") {
                    t = decodeURIComponent(s.substring(e.length + 1));
                    break
                }
            }
        return t
    }("csrftoken")
}

function divideElectoralVotesProp(e, t) {
    for (var i = [], a = 0, s = 0; s < e.length; s++) {
        var n = Math.floor(e[s] * t);
        i.push(n), a += n
    }
    return i[0] += t - a, i
}! function() {
    var e = campaignTrail_temp;

    function t() {
        for (var t = -1, i = 0; i < e.candidate_json.length; i++)
            if (e.candidate_json[i].pk == candidate_id.value) {
                t = i;
                break
            } $("#candidate_description_window").html('<div class="person_image" id="candidate_image">            <img src="' + e.candidate_json[t].fields.image_url + '" width="210" height="250"/>        </div>        <div class="person_summary" id="candidate_summary">        <ul><li>Name: ' + e.candidate_json[t].fields.first_name + " " + e.candidate_json[t].fields.last_name + "</li>        <li>Party: " + e.candidate_json[t].fields.party + "</li>        <li>Home State: " + e.candidate_json[t].fields.state + "</li>        </ul>" + e.candidate_json[t].fields.description + "</div>")
    }

    function i() {
        for (var t = -1, i = 0; i < e.candidate_json.length; i++)
            if (e.candidate_json[i].pk == running_mate_id.value) {
                t = i;
                break
            } $("#running_mate_description_window").html('<div class="person_image" id="running_mate_image">            <img src="' + e.candidate_json[t].fields.image_url + '" width="210" height="250"/>        </div>        <div class="person_summary" id="running_mate_summary">        <ul><li>Name: ' + e.candidate_json[t].fields.first_name + " " + e.candidate_json[t].fields.last_name + "</li>        <li>Party: " + e.candidate_json[t].fields.party + "</li>        <li>Home State: " + e.candidate_json[t].fields.state + "</li>        </ul>" + e.candidate_json[t].fields.description_as_running_mate + "</div>")
    }

    function a(e) {
        switch (e) {
            case "1":
                var t = "<p><strong>Use the default method of allocating electoral votes for each state.</strong></p>                 <p>In the vast majority of cases, states use a winner-take-all method. For instance,                 if Candiate A defeats Candidate B in a state, worth 20 electoral votes, Candidate                 A will usually win all 20 votes.</p>                 <p>This method tends to concentrate the election into a handful of swing states.                 It also makes it difficult for third-party candidates to win electoral votes. On                 the other hand, it is easier for a single candidate to gain an overall majority of the                 electoral votes.</p>";
                $("#opponent_selection_description_window").html(t);
                break;
            case "2":
                t = "<p><strong>Allocate each state's electoral votes proportionally.</strong></p>                <p>Under this method, all candidates split the electoral votes in a state, in                 proportion to their popular vote %.</p>                <p>There is still an advantage to winning a state -- the winner of the state will                 always receive a plurality of electoral votes. For instance, in a state with                 4 electoral votes, if Candidate A wins 51% of the vote, they will be awarded 3                 electoral votes.</p>                <p>Compared to a winner-take-all method, this method aligns the electoral vote                 more closely with the popular vote. It also makes it easier to third party                 candidates to increase their electoral vote totals. In some scenarios, this effect                 is highly significant on the final outcome. Some examples are 1860, 1948, 1968, and 2000. </p>";
                $("#opponent_selection_description_window").html(t)
        }
    }

    function s(t, i, l) {
        for (var o = "", r = 0; r < e.difficulty_level_json.length; r++) "Normal" == e.difficulty_level_json[r].fields.name ? o += "<option value=" + e.difficulty_level_json[r].pk + " selected>" + e.difficulty_level_json[r].fields.name + "</option>" : o += "<option value=" + e.difficulty_level_json[r].pk + ">" + e.difficulty_level_json[r].fields.name + "</option>";
        var d = '        <div class="game_header">        <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_4">            <div id="game_options">            <form name="game_type_selection">            <p><h3>How would you like the electoral votes to be allocated?</h3>            <select name="game_type_id" id="game_type_id">                <option value=1>Default (Winner-Take-All)</option>                <option value=2>Proportional</option>            </select>            </p>            </form>            </div>            <div class="description_window_small"                 id="opponent_selection_description_window">            </div>            <div id="difficulty_level">            <form name="difficulty_level_selection">            <p><h3>Please choose your difficulty level:</h3>            <select name="difficulty_level_id" id="difficulty_level_id">' + o + '</select>            </p>            </form>            </div>        <p id="opponent_selection_id_button_p">        <button class="person_button" id="opponent_selection_id_button">Continue</button>        </p>        </div>';
        $("#game_window").html(d), $("#game_type_id").ready(function() {
            a($("select[name=game_type_id]").val())
        }), $("#game_type_id").change(function() {
            a($("select[name=game_type_id]").val())
        }), $("#opponent_selection_id_button").click(function() {
            $("#opponent_selection_id_button").replaceWith("<em>One moment...</em>");
            for (var a = [], o = [], r = 0; r < e.candidate_dropout_json.length; r++) e.candidate_dropout_json[r].fields.candidate == i && a.push(e.candidate_dropout_json[r].fields.affected_candidate);
            var d = -1;
            for (r = 0; r < e.opponents_default_json.length; r++)
                if (e.opponents_default_json[r].election == t) {
                    d = r;
                    break
                } for (r = 0; r < e.opponents_default_json[d].candidates.length; r++) e.opponents_default_json[d].candidates[r] != i && -1 == a.indexOf(e.opponents_default_json[d].candidates[r]) && o.push(e.opponents_default_json[d].candidates[r]);
            e.election_id = t, e.candidate_id = i, e.running_mate_id = l, e.opponents_list = o, e.game_type_id = $("select[name=game_type_id]").val(), e.difficulty_level_id = $("select[name=difficulty_level_id]").val();
            var c = $("select[name=difficulty_level_id]").val();
            for ($("select[name=game_type_id]").val(), d = -1, r = 0; r < e.difficulty_level_json.length; r++)
                if (e.difficulty_level_json[r].pk == $("select[name=difficulty_level_id]").val()) {
                    d = r;
                    break
                } e.difficulty_level_multiplier = e.difficulty_level_json[d].fields.multiplier,
                function(t, i, a, l, o) {
                    var r = csrfToken();
                    $.ajax({
                        type: "POST",
                        url: "/campaign-trail/begin-current-game/",
                        beforeSend: function(e) {
                            e.setRequestHeader("X-CSRFToken", r)
                        },
                        data: {
                            election_id: t.toString(),
                            candidate_id: i,
                            opponents_list: l.toString(),
                            running_mate_id: a.toString(),
                            difficulty_level_id: o.toString()
                        },
                        dataType: "text",
                        success: function(t) {
                            $("#game_window").html(t), e.question_number = 0, e.questions_json = campaignTrail_temp.questions_json, e.answers_json = campaignTrail_temp.answers_json, e.states_json = campaignTrail_temp.states_json, e.issues_json = campaignTrail_temp.issues_json, e.state_issue_score_json = campaignTrail_temp.state_issue_score_json, e.candidate_issue_score_json = campaignTrail_temp.candidate_issue_score_json, e.running_mate_issue_score_json = campaignTrail_temp.running_mate_issue_score_json, e.candidate_state_multiplier_json = campaignTrail_temp.candidate_state_multiplier_json, e.answer_score_global_json = campaignTrail_temp.answer_score_global_json, e.answer_score_issue_json = campaignTrail_temp.answer_score_issue_json, e.answer_score_state_json = campaignTrail_temp.answer_score_state_json, e.answer_feedback_json = campaignTrail_temp.answer_feedback_json, e.candidate_image_url = campaignTrail_temp.candidate_image_url, e.running_mate_image_url = campaignTrail_temp.running_mate_image_url, e.candidate_last_name = campaignTrail_temp.candidate_last_name, e.running_mate_last_name = campaignTrail_temp.running_mate_last_name, e.running_mate_state_id = campaignTrail_temp.running_mate_state_id, e.player_answers = campaignTrail_temp.player_answers, e.player_visits = campaignTrail_temp.player_visits, e.answer_feedback_flg = campaignTrail_temp.answer_feedback_flg, e.election_id = Number(e.election_id), e.candidate_id = Number(e.candidate_id), e.running_mate_id = Number(e.running_mate_id), e.difficulty_level_id = Number(e.difficulty_level_id), e.game_start_logging_id = Number(campaignTrail_temp.game_start_logging_id), $("#view_electoral_map").click(function() {
                                var e = A(return_type = 2);
                                _(e)
                            }), $("#answer_select_button").click(function() {
                                var t = $("input:radio[name=game_answers]:checked").val();
                                null == t ? C(e.election_id) : n(t)
                            })
                        },
                        error: function(e) {
                            s(t, i, a)
                        }
                    })
                }(t, i, l, o, c)
        })
    }

    function n(t) {
        e.player_answers.push(Number(t));
        var i = 0,
            a = S(e.election_id);
        if (1 == e.answer_feedback_flg) {
            for (var s = 0; s < e.answer_feedback_json.length; s++)
                if (e.answer_feedback_json[s].fields.answer == t && e.answer_feedback_json[s].fields.candidate == e.candidate_id) {
                    i = 1;
                    break
                } if (1 == i) {
                var n = '                    <div class="overlay" id="visit_overlay"></div>                    <div class="overlay_window" id="visit_window">                        <div class="overlay_window_content" id="visit_content">                        <h3>Advisor Feedback</h3>                        <img src="' + e.election_json[a].fields.advisor_url + '" width="208" height="128"/>                        <p>' + e.answer_feedback_json[s].fields.answer_feedback + '</p>                        </div>                        <div class="overlay_buttons" id="visit_buttons">                        <button id="ok_button">OK</button><br>                        <button id="no_feedback_button">Don\'t give me advice</button>                        </div>                    </div>';
                $("#game_window").append(n), $("#ok_button").click(function() {
                    l()
                }), $("#no_feedback_button").click(function() {
                    e.answer_feedback_flg = 0, l()
                })
            }
            0 == i && l()
        } else l()
    }

    function l() {
        var t = A(2);
        if (e.question_number++, e.question_number == e.global_parameter_json[0].fields.question_count) e.final_state_results = A(1), d();
        else if (e.question_number % 2 == 0) {
            var i = S(e.election_id);
            1 == e.election_json[i].fields.has_visits ? function(e) {
                $("#game_window").html('        <div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>        </div>        <div id="map_footer_visit">        <p class="visit_text">Use this map to click on the next state you wish to visit. Choose wisely             and focus your efforts where they will have the most impact.</p>        </div>        ');
                var t = r(e, 1);
                $("#map_container").usmap(t)
            }(t) : o(t)
        } else o(t)
    }

    function o(t) {
        for (var i = [], a = 0; a < e.answers_json.length && (e.answers_json[a].fields.question != e.questions_json[e.question_number].pk || (i.push({
                key: a,
                order: Math.random()
            }), 4 != i.length)); a++);
        P(i, "order");
        var s = "";
        for (a = 0; a < i.length; a++) s += '<input type="radio" name="game_answers" class="game_answers"             id="game_answers[' + a.toString() + ']" value="' + e.answers_json[i[a].key].pk + '"/>\t\t    <label for="game_answers[' + a.toString() + ']">' + e.answers_json[i[a].key].fields.description + "</label><br>";
        var l = '<div class="game_header">    <h2>THE CAMPAIGN TRAIL</h2>    </div>    <div class="inner_window_question">        <div class="inner_inner_window">        <h3>' + e.questions_json[e.question_number].fields.description + '</h3>            <div id="question_form">                <form name="question">' + s + '</form>            </div>        </div>        <p><button id="answer_select_button" class="answer_select_button">CONTINUE</button>        <button id="view_electoral_map">Latest Polls/Electoral Map</button></p>    </div>    <img id="candidate_pic" src="' + e.candidate_image_url + '">    <img id="running_mate_pic" src="' + e.running_mate_image_url + '">    <div class="inner_window_sign_display">        <div id="progress_bar">\t    <h3>Question ' + (e.question_number + 1) + " of " + e.global_parameter_json[0].fields.question_count + '</h3>        </div>        <div id="campaign_sign">        <p>' + e.candidate_last_name + "</p>        <p>" + e.running_mate_last_name + "</p>        </div>    </div>";
        $("#game_window").html(l), $("#answer_select_button").click(function() {
            var t = $("input:radio[name=game_answers]:checked").val();
            null == t ? C(e.election_id) : n(t)
        }), $("#view_electoral_map").click(function() {
            _(t)
        })
    }

    function _(e) {
        $("#game_window").html('        <div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">        <button id="resume_questions_button">Back to the game</button>        </div>');
        var t = r(e, 0);
        $("#map_container").usmap(t), $("#resume_questions_button").click(function() {
            o(e)
        })
    }

    function r(t, i) {
        for (var a = {}, s = 0; s < t.length; s++) {
            for (var n = 0, l = 0, _ = 0; _ < t[s].result.length; _++) t[s].result[_].percent > l && (l = t[s].result[_].percent, n = t[s].result[_].candidate);
            var r = 0;
            for (_ = 0; _ < t[s].result.length; _++) t[s].result[_].candidate != n && t[s].result[_].percent > r && (r = t[s].result[_].percent);
            var d = l - r;
            for (_ = 0; _ < e.candidate_json.length; _++) e.candidate_json[_].pk == n && (a[t[s].abbr] = d > .1 ? {
                fill: e.candidate_json[_].fields.color_hex
            } : d > .051 ? {
                fill: e.candidate_json[_].fields.secondary_color_hex
            } : {
                fill: "#C9C9C9"
            })
        }
        var c = function(i, a) {
                for (var s = 0; s < e.states_json.length; s++)
                    if (e.states_json[s].fields.abbr == a.name) {
                        for (var n = [], l = 0; l < t.length; l++)
                            if (t[l].abbr == e.states_json[s].fields.abbr)
                                for (var o = 0; o < t[l].result.length; o++) t[l].result[o].percent >= .1 && n.push({
                                    candidate: t[l].result[o].candidate,
                                    percent: t[l].result[o].percent
                                });
                        P(n, "percent"), n.reverse();
                        var _ = "";
                        for (l = 0; l < n.length; l++) {
                            var r = "",
                                d = Math.floor(100 * n[l].percent) + "%";
                            for (o = 0; o < e.candidate_json.length; o++)
                                if (e.candidate_json[o].pk == n[l].candidate) {
                                    r = e.candidate_json[o].fields.last_name;
                                    break
                                } _ += "<li>" + r + " -- " + d + "</li>"
                        }
                        var c = "<h3>ESTIMATED SUPPORT</h3>                    <ul>" + _ + "</ul>                    <p><em>All estimates are approximate.</em></p>";
                        $("#overall_result").html(c);
                        var u = "";
                        for (l = 0; l < e.state_issue_score_json.length; l++)
                            if (e.state_issue_score_json[l].fields.state == e.states_json[s].pk)
                                for (o = 0; o < e.issues_json.length; o++)
                                    if (e.issues_json[o].pk == e.state_issue_score_json[l].fields.issue) {
                                        if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_1_max) var v = e.issues_json[o].fields.stance_1;
                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_2_max) v = e.issues_json[o].fields.stance_2;
                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_3_max) v = e.issues_json[o].fields.stance_3;
                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_4_max) v = e.issues_json[o].fields.stance_4;
                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_5_max) v = e.issues_json[o].fields.stance_5;
                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_6_max) v = e.issues_json[o].fields.stance_6;
                                        else if (e.state_issue_score_json[l].fields.state_issue_score > e.global_parameter_json[0].fields.issue_stance_6_max) v = e.issues_json[o].fields.stance_7;
                                        u += "<li>" + e.issues_json[o].fields.name + " -- " + v + "</li>"
                                    } var f = "                    <h3>STATE SUMMARY</h3>                    <p>" + e.states_json[s].fields.name + "</p>                    <ul>" + u + "</ul>                    <p>Electoral Votes: " + e.states_json[s].fields.electoral_votes + "</p>";
                        $("#state_info").html(f);
                        break
                    }
            },
            u = S(e.election_id);
        if (0 == i) var v = {
            stateStyles: {
                fill: "#EAFDFF"
            },
            stateHoverStyles: {
                fill: "#EAFDFF"
            },
            stateSpecificStyles: a,
            stateSpecificHoverStyles: a,
            click: c,
            mouseover: c
        };
        if (1 == i) v = {
            stateStyles: {
                fill: "#EAFDFF"
            },
            stateHoverStyles: {
                fill: "#EAFDFF"
            },
            stateSpecificStyles: a,
            stateSpecificHoverStyles: a,
            click: function(i, a) {
                for (var s = 0; s < e.states_json.length; s++)
                    if (e.states_json[s].fields.abbr == a.name) {
                        var n = '                    <div class="overlay" id="visit_overlay"></div>    \t            <div class="overlay_window" id="visit_window">                    \t<div class="overlay_window_content" id="visit_content">                    \t<h3>Advisor Feedback</h3>                    \t<img src="' + e.election_json[u].fields.advisor_url + '" width="208" height="128"/>                    \t<p>You have chosen to visit ' + e.states_json[s].fields.name + ' -- is this correct?</p>                \t    </div>                    \t<div class="overlay_buttons" id="visit_buttons">                    \t<button id="confirm_visit_button">YES</button><br>                    \t<button id="no_visit_button">NO</button>                    \t</div>                \t</div>';
                        $("#game_window").append(n), $("#confirm_visit_button").click(function() {
                            e.player_visits.push(e.states_json[s].pk), o(t)
                        }), $("#no_visit_button").click(function() {
                            $("#visit_overlay").remove(), $("#visit_window").remove()
                        });
                        break
                    }
            },
            mouseover: c
        };
        return v
    }

    function d() {
        ! function() {
            for (var t = u(), i = "", a = 0; a < t.length; a++) i += '            <li><span style="color:' + t[a].color + "; background-color: " + t[a].color + '">--</span> ' + t[a].last_name + ":  0</li>";
            var s = S(e.election_id),
                n = e.election_json[s].fields.winning_electoral_vote_number;
            $("#game_window").html('        <div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>' + i + "</ul>                        <p>0% complete</br>" + n + ' to win</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_result">                        <h3>STATE RESULTS</h3>                        <p>Click on a state to view detailed results (once returns for that state arrive).</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>        <div class="overlay" id="election_night_overlay"></div>        <div class="overlay_window" id="election_night_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="' + e.election_json[s].fields.advisor_url + '" width="208" height="128"/>            <p>Election night has arrived. Settle in and wait for the returns, however                 long it may take. Best of luck!</p>            </div>            <div class="overlay_buttons" id="election_night_buttons">            <button id="ok_button">OK</button><br>            </div>        </div>');
            var l = function() {
                for (var t = {}, i = 0; i < e.states_json.length; i++) t[e.states_json[i].fields.abbr] = {
                    fill: "#C9C9C9"
                };
                return {
                    stateStyles: {
                        fill: "#EAFDFF"
                    },
                    stateHoverStyles: {
                        fill: "#EAFDFF"
                    },
                    stateSpecificStyles: t,
                    stateSpecificHoverStyles: t
                }
            }();
            $("#map_container").usmap(l), $("#ok_button").click(function() {
                $("#election_night_overlay").remove(), $("#election_night_window").remove()
            }), $("#final_result_button").click(function() {
                clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                v(500);
                m()
            })
        }();
        e.final_overall_results = [];
        for (var t = 0; t < e.final_state_results[0].result.length; t++) e.final_overall_results.push({
            candidate: e.final_state_results[0].result[t].candidate,
            electoral_votes: 0,
            popular_votes: 0
        });
        ! function() {
            for (var t = 0; t < e.final_state_results.length; t++) {
                var i = R(e.final_state_results[t].state),
                    a = c(e.final_state_results[t].result, e.states_json[i].fields.poll_closing_time);
                e.final_state_results[t].result_time = a
            }
        }(), $("#ok_button").click(function() {
            results_timeout = setTimeout(function() {
                ! function t(i, a) {
                    var s = [0, 0];
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[0] && (s[0] = e.final_overall_results[n].electoral_votes);
                    var a = v(i);
                    var l = S(e.election_id);
                    var o = e.election_json[l].fields.winning_electoral_vote_number;
                    var _ = u();
                    var r = "";
                    for (var n = 0; n < _.length; n++) {
                        for (var d = 0; d < e.final_overall_results.length; d++)
                            if (e.final_overall_results[d].candidate == _[n].candidate) var c = e.final_overall_results[d].electoral_votes;
                        r += '            <li><span style="color:' + _[n].color + "; background-color: " + _[n].color + '">--</span> ' + _[n].last_name + ":  " + c + "</li>"
                    }
                    var p = f(i);
                    var h = Math.floor(i / 480 * 100);
                    var g = $("#state_result_container").html();
                    $("#game_window").html("");
                    $("#game_window").html('        <div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>' + r + "</ul>                        <p>" + h + "% complete</br>" + o + ' to win</p>                    </div>                </div>                <div id="state_result_container">' + g + '</div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>');
                    $("#map_container").usmap(p);
                    $("#final_result_button").click(function() {
                        clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                        v(500);
                        m()
                    });
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[1] && (s[1] = e.final_overall_results[n].electoral_votes);
                    if (s[0] < o && s[1] >= o) {
                        if (e.final_overall_results[0].candidate == e.candidate_id) var b = "Congratulations! You won this year's election! Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice victory speech prepared for your supporters.";
                        else if (e.final_overall_results[0].candidate != e.candidate_id) var b = "Sorry. You have lost the election this time. Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice concession speech prepared.";
                        $("#game_window").append('            <div class="overlay" id="election_night_overlay"></div>            <div class="overlay_window" id="election_night_window">                <div class="overlay_window_content" id="election_night_content">                <h3>Advisor Feedback</h3>                <img src="' + e.election_json[l].fields.advisor_url + '" width="208" height="128"/><p>' + b + '</p></div>                <div class="overlay_buttons" id="winner_buttons">                <button id="ok_button">OK</button><br>                <button id="overlay_result_button">Go to Final Results</button>                </div>            </div>'), $("#ok_button").click(function() {
                            $("#election_night_overlay").remove(), $("#election_night_window").remove(), results_timeout = setTimeout(function() {
                                t(i, a)
                            }, 2e3)
                        }), $("#overlay_result_button").click(function() {
                            $("#election_night_overlay").remove(), $("#election_night_window").remove(), clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
                            v(500);
                            m()
                        })
                    } else i >= 480 || a >= e.states_json.length ? (h = 100, $("#overall_result").html("            <h3>ELECTORAL VOTES</h3>            <ul>" + r + "</ul>            <p>" + h + "% complete</br>" + o + " to win</p>")) : results_timeout = setTimeout(function() {
                        t(i, a)
                    }, 2e3);
                    i += 10
                }(0, 0)
            }, 2e3)
        })
    }

    function c(e, t) {
        P(e, "votes"), e.reverse();
        var i = (e[0].votes - e[1].votes) / (e[0].votes + e[1].votes);
        return i < .0025 ? 480 : i < .005 ? 460 : i < .01 ? t > 200 ? 440 : t + 240 : i < .015 ? t > 260 ? 440 : t + 180 : i < .03 ? t > 270 ? 420 : t + 150 : i < .045 ? t > 300 ? 420 : t + 120 : i < .066 ? t > 330 ? 420 : t + 90 : i < .085 ? t > 340 ? 420 : t + 80 : i < .1 ? t > 350 ? 420 : t + 70 : i < .12 ? t > 360 ? 420 : t + 60 : i < .14 ? t > 370 ? 420 : t + 50 : i < .16 ? t > 380 ? 420 : t + 40 : i < .18 ? t > 390 ? 420 : t + 30 : i < .2 ? t > 400 ? 420 : t + 20 : i < .25 ? t > 410 ? 420 : t + 10 : t
    }

    function u() {
        var t = [],
            i = E(e.candidate_id);
        t.push({
            candidate: e.candidate_id,
            priority: e.candidate_json[i].fields.priority,
            color: e.candidate_json[i].fields.color_hex,
            last_name: e.candidate_json[i].fields.last_name
        });
        for (var a = 0; a < e.opponents_list.length; a++) i = E(e.opponents_list[a]), t.push({
            candidate: e.opponents_list[a],
            priority: e.candidate_json[i].fields.priority,
            color: e.candidate_json[i].fields.color_hex,
            last_name: e.candidate_json[i].fields.last_name
        });
        return P(t, "priority"), t
    }

    function v(t) {
        for (var i = 0, a = 0; a < e.final_overall_results.length; a++) e.final_overall_results[a].popular_votes = 0, e.final_overall_results[a].electoral_votes = 0;
        for (a = 0; a < e.final_state_results.length; a++)
            if (e.final_state_results[a].result_time <= t) {
                i++;
                for (var s = 0; s < e.final_state_results[a].result.length; s++)
                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].candidate == e.final_state_results[a].result[s].candidate && (e.final_overall_results[n].popular_votes += e.final_state_results[a].result[s].votes, e.final_overall_results[n].electoral_votes += e.final_state_results[a].result[s].electoral_votes)
            } var l = [];
        for (a = 0; a < e.final_overall_results.length; a++) {
            var o = [];
            for (s = 0; s < e.final_overall_results.length; s++) {
                var _ = 1;
                for (n = 0; n < l.length; n++) l[n].candidate == e.final_overall_results[s].candidate && (_ = 0);
                1 == _ && o.push(e.final_overall_results[s])
            }
            var r = 0,
                d = 0;
            for (s = 0; s < o.length; s++)
                if (o[s].electoral_votes > d || o[s].electoral_votes == d && o[s].popular_votes >= r) {
                    d = o[s].electoral_votes, r = o[s].popular_votes;
                    var c = s
                } l.push(o[c])
        }
        return e.final_overall_results = l, i
    }

    function f(t) {
        for (var i = {}, a = 0; a < e.final_state_results.length; a++) {
            var s = E(e.final_state_results[a].result[0].candidate);
            e.final_state_results[a].result_time <= t ? i[e.final_state_results[a].abbr] = {
                fill: e.candidate_json[s].fields.color_hex
            } : i[e.final_state_results[a].abbr] = {
                fill: "#C9C9C9"
            }
        }
        return {
            stateStyles: {
                fill: "#EAFDFF"
            },
            stateHoverStyles: {
                fill: "#EAFDFF"
            },
            stateSpecificStyles: i,
            stateSpecificHoverStyles: i,
            click: function(i, a) {
                for (var s = 0; s < e.final_state_results.length; s++)
                    if (e.final_state_results[s].abbr == a.name) {
                        if (e.final_state_results[s].result_time > t) {
                            var n = "                        <h3>STATE RESULTS</h3>                        <p>Returns for this state are not yet available!</p>";
                            $("#state_result").html(n)
                        } else {
                            for (var l = 0; l < e.states_json.length; l++)
                                if (e.states_json[l].fields.abbr == a.name) {
                                    var o = l;
                                    break
                                } var _ = "";
                            for (l = 0; l < Math.min(e.final_state_results[s].result.length, 4); l++)
                                if (e.final_state_results[s].result[l].votes > 0) {
                                    var r = E(e.final_state_results[s].result[l].candidate);
                                    _ += '                                <li><span style="color:' + e.candidate_json[r].fields.color_hex + "; background-color: " + e.candidate_json[r].fields.color_hex + '">--</span> ' + e.candidate_json[r].fields.last_name + ":  " + (100 * e.final_state_results[s].result[l].percent).toFixed(1) + "%</li>"
                                } n = "                        <h3>STATE RESULTS</h3>                        <p>" + e.states_json[o].fields.name + "</p>                        <p>Electoral Votes: " + e.states_json[o].fields.electoral_votes + "<ul>" + _ + "</ul>                        </p>", $("#state_result").html(n)
                        }
                        break
                    }
            }
        }
    }

    function m() {
        for (var t = JSON.stringify({
                election_id: e.election_id,
                candidate_id: e.candidate_id,
                running_mate_id: e.running_mate_id,
                difficulty_level_id: e.difficulty_level_id,
                game_start_logging_id: e.game_start_logging_id,
                game_type_id: e.game_type_id
            }), i = [], a = 0; a < e.opponents_list.length; a++) i.push({
            candidate_id: e.opponents_list[a]
        });
        i = JSON.stringify(i);
        var s = [];
        for (a = 0; a < e.player_answers.length; a++) s.push({
            answer_id: e.player_answers[a]
        });
        s = JSON.stringify(s);
        var n = [],
            l = S(e.election_id),
            o = e.election_json[l].fields.winning_electoral_vote_number;
        for (a = 0; a < e.final_overall_results.length; a++) n.push({
            candidate_id: e.final_overall_results[a].candidate,
            electoral_votes: e.final_overall_results[a].electoral_votes,
            popular_votes: e.final_overall_results[a].popular_votes,
            player_candidate_flg: e.candidate_id == e.final_overall_results[a].candidate,
            winning_candidate_flg: e.final_overall_results[a].electoral_votes >= o
        });
        n = JSON.stringify(n);
        var _ = [];
        for (a = 0; a < e.final_state_results.length; a++)
            for (var r = 0; r < e.final_state_results[a].result.length; r++) _.push({
                state_id: e.final_state_results[a].state,
                candidate_id: e.final_state_results[a].result[r].candidate,
                electoral_votes: e.final_state_results[a].result[r].electoral_votes,
                popular_votes: e.final_state_results[a].result[r].votes,
                player_candidate_flg: e.candidate_id == e.final_state_results[a].result[r].candidate,
                winning_candidate_flg: 0 == r
            });
        _ = JSON.stringify(_);
        var d = [];
        for (temp_visit_counter = {}, a = 0; a < e.player_visits.length; ++a) temp_visit_counter[e.player_visits[a]] || (temp_visit_counter[e.player_visits[a]] = 0), temp_visit_counter[e.player_visits[a]] += 1;
        for (a = 0; a < Object.keys(temp_visit_counter).length; a++) d.push({
            candidate_id: e.candidate_id,
            state_id: +Object.keys(temp_visit_counter)[a],
            visit_count: temp_visit_counter[Object.keys(temp_visit_counter)[a]]
        });
        d = JSON.stringify(d);
        var c = csrfToken();
        $.ajax({
            type: "POST",
            url: "/campaign-trail/save-game-results/",
            beforeSend: function(e) {
                e.setRequestHeader("X-CSRFToken", c)
            },
            data: {
                campaign_trail_game: t,
                campaign_trail_game_opponent: i,
                campaign_trail_game_answer: s,
                campaign_trail_game_result: n,
                campaign_trail_state_result: _,
                campaign_trail_visit_counter: d
            },
            dataType: "text",
            success: function(t) {
                $("#game_window").append(t), e.historical_overall = campaignTrail_temp.historical_overall, e.percentile = campaignTrail_temp.percentile, e.game_results_url = campaignTrail_temp.game_results_url, p()
            },
            error: function(t) {
                e.historical_overall = "None", e.percentile = "None", e.game_results_url = "None", p()
            }
        })
    }

    function p() {
        var t = S(e.election_id),
            i = E(e.candidate_id),
            a = e.election_json[t].fields.winning_electoral_vote_number;
        if (e.final_overall_results[0].candidate == e.candidate_id && e.final_overall_results[0].electoral_votes >= a) {
            var s = e.candidate_json[i].fields.electoral_victory_message;
            e.final_outcome = "win"
        } else if (e.final_overall_results[0].candidate != e.candidate_id && e.final_overall_results[0].electoral_votes >= a) {
            s = e.candidate_json[i].fields.electoral_loss_message;
            e.final_outcome = "loss"
        } else if (e.final_overall_results[0].electoral_votes < a) {
            s = e.candidate_json[i].fields.no_electoral_majority_message;
            e.final_outcome = "tie"
        }
        var n = E(e.final_overall_results[0].candidate);
        if (e.final_overall_results[0].electoral_votes >= a) var l = e.candidate_json[n].fields.image_url;
        else l = e.election_json[t].fields.no_electoral_majority_image;
        for (var o = 0, _ = 0; _ < e.final_overall_results.length; _++) o += e.final_overall_results[_].popular_votes;
        var r = "";
        for (_ = 0; _ < e.final_overall_results.length; _++) {
            i = E(e.final_overall_results[_].candidate);
            var d = e.candidate_json[i].fields.color_hex;
            r += '            <tr><td style="text-align: left;">            <span style="background-color: ' + d + "; color: " + d + ';">----</span> ' + (f = e.candidate_json[i].fields.first_name + " " + e.candidate_json[i].fields.last_name) + "</td><td> " + e.final_overall_results[_].electoral_votes + " </td><td> " + M(e.final_overall_results[_].popular_votes) + " </td><td> " + (e.final_overall_results[_].popular_votes / o * 100).toFixed(1) + "% </td></tr>"
        }
        if ("None" != e.game_results_url) var c = '<h4>Final Results: <a target="_blank" href="' + e.game_results_url + '">Game Link</a> (use link to view this result on its own page)</h4>';
        else c = "(Sorry. No URL available for these results. Something went wrong when saving data.)";
        var u = '        <div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="results_container">                <img class="person_image" src="' + l + '"/>            <div id="final_results_description">' + s + '</div>            <div id="final_results_share">                Share your results: <img id="fb_share_button" src="/static/images/quiz-share-facebook.png" style="cursor: pointer;"/>            </div>            <div id="overall_vote_statistics">' + c + '<table class="final_results_table">            <tr><th>Candidate</th><th>Electoral Votes</th>            <th>Popular Votes</th><th>Popular Vote %</th></tr>' + r + '</table>            </div>        </div>        </div>        <div id="map_footer">            <button class="final_menu_button" id="overall_results_button" disabled="disabled">                Final Election Results            </button>            <button class="final_menu_button" id="final_election_map_button">                Election Map            </button>            <button class="final_menu_button" id="state_results_button">                Results by State            </button>            <button class="final_menu_button" id="overall_details_button">                Overall Results Details            </button>            <button class="final_menu_button" id="recommended_reading_button">                Further Reading            </button>            <button class="final_menu_button" id="play_again_button">                Play Again!            </button>        </div>';
        $("#game_window").html(u);
        t = S(e.election_id), i = E(e.candidate_id);
        var v = e.election_json[t].fields.year,
            f = e.candidate_json[i].fields.first_name + " " + e.candidate_json[i].fields.last_name,
            m = e.candidate_json[i].fields.description;
        if (m = m.replace("</p><p>", " ").replace("<p>", "").replace("</p>", "").replace("<em>", "").replace("</em>", ""), "win" == e.final_outcome) var p = "I won the " + v + " election as " + f + ". How would you do?";
        else if ("loss" == e.final_outcome) p = "I lost the " + v + " election as " + f + ". How would you do?";
        else if ("tie" == e.final_outcome) p = "I deadlocked the " + v + " Electoral College as " + f + ". How would you do?";
        $("#fb_share_button").click(function() {
            FB.ui({
                display: "popup",
                method: "feed",
                link: "https://www.americanhistoryusa.com" + e.game_results_url,
                picture: "https://www.americanhistoryusa.com" + e.candidate_image_url,
                name: p,
                description: "Click to see the Electoral College map from my game, and then try it yourself!"
            }, function(e) {})
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function h() {
        for (var t = f(500), i = u(), a = "", s = 0; s < i.length; s++) {
            for (var n = 0; n < e.final_overall_results.length; n++)
                if (e.final_overall_results[n].candidate == i[s].candidate) var l = e.final_overall_results[n].electoral_votes;
            a += '            <li><span style="color:' + i[s].color + "; background-color: " + i[s].color + '">--</span> ' + i[s].last_name + ":  " + l + "</li>"
        }
        var o = S(e.election_id),
            _ = '        <div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>' + a + "</ul><p>" + e.election_json[o].fields.winning_electoral_vote_number + ' to win</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_result">                    <h3>STATE RESULTS</h3>                    <p>Click on a state to view final results.</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">            <button class="final_menu_button" id="overall_results_button">                Final Election Results            </button>            <button class="final_menu_button" id="final_election_map_button" disabled="disabled">                Election Map            </button>            <button class="final_menu_button" id="state_results_button">                Results by State            </button>            <button class="final_menu_button" id="overall_details_button">                Overall Results Details            </button>            <button class="final_menu_button" id="recommended_reading_button">                Further Reading            </button>            <button class="final_menu_button" id="play_again_button">                Play Again!            </button>        </div>';
        $("#game_window").html(_), $("#map_container").usmap(t), $("#overall_results_button").click(function() {
            p()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function g() {
        for (var t = [], i = [], a = [], s = 0; s < e.final_state_results.length; s++) {
            var n = R(e.final_state_results[s].state);
            t.push({
                state: e.states_json[n].pk,
                name: e.states_json[n].fields.name
            }), i.push({
                state: e.states_json[n].pk,
                name: e.states_json[n].fields.name,
                electoral_votes: e.states_json[n].fields.electoral_votes
            }), a.push({
                state: e.states_json[n].pk,
                name: e.states_json[n].fields.name,
                pct_margin: e.final_state_results[s].result[0].percent - e.final_state_results[s].result[1].percent
            })
        }
        P(t, "name"), P(i, "electoral_votes"), i.reverse(), P(a, "pct_margin");
        var l = [],
            o = [];
        for (s = 0; s < e.final_overall_results.length; s++) {
            for (var _ = e.final_overall_results[s].candidate, r = E(_), d = [], c = [], u = 0; u < e.final_state_results.length; u++) {
                if (e.final_state_results[u].result[0].candidate == _) {
                    var v = e.final_state_results[u].result[0].percent - e.final_state_results[u].result[1].percent;
                    n = R(e.final_state_results[u].state);
                    d.push({
                        state: e.final_state_results[u].state,
                        name: e.states_json[n].fields.name,
                        pct_margin: v
                    })
                }
                for (var f = 0; f < e.final_state_results[u].result.length; f++)
                    if (e.final_state_results[u].result[f].candidate == _) {
                        n = R(e.final_state_results[u].state);
                        c.push({
                            state: e.final_state_results[u].state,
                            name: e.states_json[n].fields.name,
                            vote_pct: e.final_state_results[u].result[f].percent
                        })
                    }
            }
            P(d, "pct_margin"), l.push({
                candidate: _,
                last_name: e.candidate_json[r].fields.last_name,
                values: d
            }), P(c, "vote_pct"), c.reverse(), o.push({
                candidate: _,
                last_name: e.candidate_json[r].fields.last_name,
                values: c
            })
        }
        var m = "";
        for (s = 0; s < l.length; s++) l[s].values.length > 0 && (m += '<option value="' + (10 + s) + '">Closest ' + l[s].last_name + " Wins</option>");
        var g = "";
        for (s = 0; s < o.length; s++) g += '<option value="' + (20 + s) + '">Highest ' + o[s].last_name + " %</option>";
        var j = '    <div class="game_header">    \t<h2>THE CAMPAIGN TRAIL</h2>\t</div>\t<div id="main_content_area">\t<div id="results_container">\t\t<h3 class="title_h3">Election Results and Data by State</h3>\t\t<div id="drop_down_area_state">\t\t\t<div id="sort_tab_area">\t\t\t<p>View states by:\t\t\t<select id="sort_tab">\t\t\t<option value="1">Alphabetical</option>\t\t\t<option value="2">Most Electoral Votes</option>\t\t\t<option value="3">Closest States</option>' + m + g + '</select>\t\t\t</p>\t\t\t</div>\t\t\t<div id="state_tab_area">\t\t\t<p>Select a state:\t\t\t<select id="state_tab">' + k(t) + '</select>\t\t\t</p>\t\t\t</div>\t\t</div>\t\t<div id="state_result_data_summary">' + T(t[0].state) + '</div>\t</div>\t<div id="results_container_description">\t</div>\t</div>\t<div id="map_footer">\t\t<button class="final_menu_button" id="overall_results_button">Final Election Results</button>\t\t<button class="final_menu_button" id="final_election_map_button">Election Map</button>\t\t<button class="final_menu_button" id="state_results_button" disabled="disabled">Results by State</button>\t\t<button class="final_menu_button" id="overall_details_button">Overall Results Details</button>\t\t<button class="final_menu_button" id="recommended_reading_button">Further Reading</button>\t\t<button class="final_menu_button" id="play_again_button">Play Again!</button>\t</div>';
        $("#game_window").html(j), $("#sort_tab").change(function() {
            if (1 == sort_tab.value) var e = k(t);
            else if (2 == sort_tab.value) e = k(i);
            else if (3 == sort_tab.value) e = k(a);
            else if (sort_tab.value >= 10 && sort_tab.value <= 19) {
                var s = sort_tab.value - 10;
                e = k(l[s].values)
            } else s = sort_tab.value - 20, e = k(o[s].values);
            $("#state_tab").html(e);
            var n = T(state_tab.value);
            $("#state_result_data_summary").html(n)
        }), $("#state_tab").change(function() {
            var e = T(state_tab.value);
            $("#state_result_data_summary").html(e)
        }), $("#overall_results_button").click(function() {
            p()
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function b() {
        S(e.election_id);
        for (var t = 0, i = 0; i < e.final_overall_results.length; i++) t += e.final_overall_results[i].popular_votes;
        var a = "";
        for (i = 0; i < e.final_overall_results.length; i++) {
            var s = E(e.final_overall_results[i].candidate),
                n = e.candidate_json[s].fields.color_hex;
            a += '            <tr><td style="text-align: left;">            <span style="background-color: ' + n + "; color: " + n + ';">----</span> ' + (e.candidate_json[s].fields.first_name + " " + e.candidate_json[s].fields.last_name) + "</td><td> " + e.final_overall_results[i].electoral_votes + " </td><td> " + M(e.final_overall_results[i].popular_votes) + " </td><td> " + (e.final_overall_results[i].popular_votes / t * 100).toFixed(1) + "% </td></tr>"
        }
        if ("None" != e.percentile) var l = "<p>You have done better than approximately <strong>" + e.percentile + "%</strong> of the games that have been played with your candidate and difficulty level.</p>";
        else l = "";
        if ("None" != e.historical_overall) {
            var o = "";
            for (i = 0; i < e.historical_overall.length; i++) o += '<tr><td style="text-align: left;">                <span style="background-color: ' + e.historical_overall[i].color_hex + "; color: " + e.historical_overall[i].color_hex + ';">----</span>' + e.historical_overall[i].name + "</td><td>" + e.historical_overall[i].winning_pct.toFixed(2) + "</td><td>" + e.historical_overall[i].electoral_votes_avg.toFixed(1) + "</td><td>" + M(e.historical_overall[i].popular_votes_avg) + "</td><td>" + e.historical_overall[i].popular_vote_pct_avg.toFixed(2) + "</td><td>" + e.historical_overall[i].electoral_votes_min + " - " + e.historical_overall[i].electoral_votes_max + "</td><td>" + M(e.historical_overall[i].popular_votes_min) + " - " + M(e.historical_overall[i].popular_votes_max) + "</td></tr>";
            var _ = '<div id="overall_stat_details">            <h4>Historical Results - Your Candidate and Difficulty Level</h4>            <table>            <tr><th>Candidate</th>                <th>Win %</th>                <th>EV Avg.</th>                <th>PV Avg.</th>                <th>PV % Avg.</th>                <th>EV Range</th>                <th>PV Range</th>            </tr>' + o + "</table>            </div>"
        } else o = "", _ = "";
        var r = '    <div class="game_header">\t<h2>THE CAMPAIGN TRAIL</h2>\t</div>\t<div id="main_content_area">\t<div id="overall_details_container">\t\t<h3>Overall Election Details</h3>\t\t<div id="overall_election_details">\t\t<h4>Results - This Game</h4>\t\t<table>\t\t<tr><th>Candidate</th>\t\t<th>Electoral Votes</th>\t\t<th>Popular Votes</th>\t\t<th>Popular Vote %</th>\t\t</tr>' + a + "</table>" + l + "</div>" + _ + '</div>\t</div>\t<div id="map_footer">\t\t<button class="final_menu_button" id="overall_results_button">Final Election Results</button>\t\t<button class="final_menu_button" id="final_election_map_button">Election Map</button>\t\t<button class="final_menu_button" id="state_results_button">Results by State</button>\t\t<button class="final_menu_button" id="overall_details_button" disabled="disabled">Overall Results Details</button>\t\t<button class="final_menu_button" id="recommended_reading_button">Further Reading</button>\t\t<button class="final_menu_button" id="play_again_button">Play Again!</button>\t</div>';
        $("#game_window").html(r), $("#overall_results_button").click(function() {
            p()
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#recommended_reading_button").click(function() {
            w()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function w() {
        var t = S(e.election_id),
            i = '        <div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area_reading">            <h3 class="results_tab_header">Recommended Reading</h3>        <p>Are you interested in exploring the ' + e.election_json[t].fields.year + ' election further?         This page contains some recommended reading to get you up to speed.</p>        <div id="recommended_reading_box">' + e.election_json[t].fields.recommended_reading + '</div>        </div>        <div id="map_footer">                <button class="final_menu_button" id="overall_results_button">                    Final Election Results                </button>                <button class="final_menu_button" id="final_election_map_button">                    Election Map                </button>                <button class="final_menu_button" id="state_results_button">                    Results by State                </button>                <button class="final_menu_button" id="overall_details_button">                    Overall Results Details                </button>                <button class="final_menu_button" id="recommended_reading_button" disabled="disabled">                    Further Reading                </button>                <button class="final_menu_button" id="play_again_button">                    Play Again!                </button>            </div>';
        $("#game_window").html(i), $("#overall_results_button").click(function() {
            p()
        }), $("#final_election_map_button").click(function() {
            h()
        }), $("#state_results_button").click(function() {
            g()
        }), $("#overall_details_button").click(function() {
            b()
        }), $("#play_again_button").click(function() {
            y()
        })
    }

    function y() {
        var t = S(e.election_id);
        $("#game_window").append('        <div class="overlay" id="new_game_overlay"></div>        <div class="overlay_window" id="new_game_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="' + e.election_json[t].fields.advisor_url + '" width="208" height="128"/><p>            Are you sure you want to begin a new game?            </p></div>            <div class="overlay_buttons" id="new_game_buttons">            <button id="new_game_button">Yes</button><br>            <button id="cancel_button">No</button>            </div>        </div>'), $("#new_game_button").click(function() {
            window.location.href = window.location.href
        }), $("#cancel_button").click(function() {
            $("#new_game_overlay").remove(), $("#new_game_window").remove()
        })
    }

    function k(e) {
        for (var t = "", i = 0; i < e.length; i++) t += '<option value="' + e[i].state + '">' + e[i].name + "</option>";
        return t
    }

    function T(t) {
        for (var i = "        <h4>Results - This Game</h4>        <table>\t    <tr><th>Candidate</th><th>Popular Votes</th>\t    <th>Popular Vote %</th><th>Electoral Votes</th></tr>", a = 0; a < e.final_state_results.length; a++)
            if (e.final_state_results[a].state == t)
                for (var s = 0; s < e.final_state_results[a].result.length; s++) {
                    var n = E(e.final_state_results[a].result[s].candidate);
                    i += "                    <tr><td>" + (e.candidate_json[n].fields.first_name + " " + e.candidate_json[n].fields.last_name) + "</td><td>" + M(e.final_state_results[a].result[s].votes) + "</td><td>" + (100 * e.final_state_results[a].result[s].percent).toFixed(2) + "</td><td>" + e.final_state_results[a].result[s].electoral_votes + "</td></tr>"
                }
        return i += "</table>"
    }

    function A(t) {
        var i = [];
        i.push(e.candidate_id);
        for (var a = 0; a < e.opponents_list.length; a++) i.push(e.opponents_list[a]);
        var s = [];
        for (a = 0; a < i.length; a++) {
            for (var n = [], l = 0, o = 0, _ = 0, r = 0; r < e.player_answers.length; r++)
                for (var d = 0; d < e.answer_score_global_json.length; d++)
                    if (e.answer_score_global_json[d].fields.answer == e.player_answers[r] && e.answer_score_global_json[d].fields.candidate == e.candidate_id && e.answer_score_global_json[d].fields.affected_candidate == i[a]) {
                        n.push(e.answer_score_global_json[d].fields.global_multiplier);
                        break
                    } for (r = 0; r < n.length; r++) l += n[r];
            if (o = i[a] == e.candidate_id && l < -.4 ? .6 : 1 + l, i[a] == e.candidate_id) var c = o * (1 + F() * e.global_parameter_json[0].fields.global_variance) * e.difficulty_level_multiplier;
            else c = o * (1 + F() * e.global_parameter_json[0].fields.global_variance);
            _ = 1 == isNaN(c) ? 1 : c, s.push({
                candidate: i[a],
                global_multiplier: _
            })
        }
        var u = [];
        for (a = 0; a < i.length; a++) {
            var v = [];
            for (r = 0; r < e.candidate_issue_score_json.length && (e.candidate_issue_score_json[r].fields.candidate != i[a] || (v.push({
                    issue: e.candidate_issue_score_json[r].fields.issue,
                    issue_score: e.candidate_issue_score_json[r].fields.issue_score
                }), v.length != e.issues_json.length)); r++);
            u.push({
                candidate_id: i[a],
                issue_scores: v
            })
        }
        var f = [];
        for (a = 0; a < i.length; a++) {
            var m = [];
            for (r = 0; r < e.candidate_state_multiplier_json.length; r++)
                if (e.candidate_state_multiplier_json[r].fields.candidate == i[a]) {
                    var p = e.candidate_state_multiplier_json[r].fields.state_multiplier * s[a].global_multiplier * (1 + F() * e.global_parameter_json[0].fields.global_variance);
                    if (m.push({
                            state: e.candidate_state_multiplier_json[r].fields.state,
                            state_multiplier: p
                        }), m.length == e.states_json.length) break;
                    P(m, "state")
                } f.push({
                candidate_id: i[a],
                state_multipliers: m
            })
        }
        for (a = 0; a < u[0].issue_scores.length; a++) {
            var h = -1;
            for (r = 0; r < e.running_mate_issue_score_json.length; r++)
                if (e.running_mate_issue_score_json[r].fields.issue == u[0].issue_scores[a].issue) {
                    h = r;
                    break
                } var g = 0,
                b = 0;
            for (r = 0; r < e.player_answers.length; r++)
                for (d = 0; d < e.answer_score_issue_json.length; d++) e.answer_score_issue_json[d].fields.issue == u[0].issue_scores[a].issue && e.answer_score_issue_json[d].fields.answer == e.player_answers[r] && (g += e.answer_score_issue_json[d].fields.issue_score * e.answer_score_issue_json[d].fields.issue_importance, b += e.answer_score_issue_json[d].fields.issue_importance);
            u[0].issue_scores[a].issue_score = (u[0].issue_scores[a].issue_score * e.global_parameter_json[0].fields.candidate_issue_weight + e.running_mate_issue_score_json[h].fields.issue_score * e.global_parameter_json[0].fields.running_mate_issue_weight + g) / (e.global_parameter_json[0].fields.candidate_issue_weight + e.global_parameter_json[0].fields.running_mate_issue_weight + b)
        }
        for (a = 0; a < i.length; a++)
            for (r = 0; r < f[a].state_multipliers.length; r++) {
                var w = 0;
                for (d = 0; d < e.player_answers.length; d++)
                    for (var j = 0; j < e.answer_score_state_json.length; j++) e.answer_score_state_json[j].fields.state == f[a].state_multipliers[r].state && e.answer_score_state_json[j].fields.answer == e.player_answers[d] && e.answer_score_state_json[j].fields.candidate == e.candidate_id && e.answer_score_state_json[j].fields.affected_candidate == i[a] && (w += e.answer_score_state_json[j].fields.state_multiplier);
                if (0 == a) {
                    e.running_mate_state_id == f[a].state_multipliers[r].state && (w += .004 * f[a].state_multipliers[r].state_multiplier);
                    for (d = 0; d < e.player_visits.length; d++) e.player_visits[d] == f[a].state_multipliers[r].state && (w += .005 * Math.max(.1, f[a].state_multipliers[r].state_multiplier))
                }
                f[a].state_multipliers[r].state_multiplier += w
            }
        var y = [];
        for (a = 0; a < f[0].state_multipliers.length; a++) {
            var k = [];
            for (r = 0; r < i.length; r++) {
                var $ = 0;
                for (d = 0; d < u[r].issue_scores.length; d++) {
                    var T = 0,
                        A = 1;
                    for (j = 0; j < e.state_issue_score_json.length; j++)
                        if (e.state_issue_score_json[j].fields.state == f[0].state_multipliers[a].state && e.state_issue_score_json[j].fields.issue == u[0].issue_scores[d].issue) {
                            T = e.state_issue_score_json[j].fields.state_issue_score, A = e.state_issue_score_json[j].fields.weight;
                            break
                        } var S = u[r].issue_scores[d].issue_score * Math.abs(u[r].issue_scores[d].issue_score),
                        E = T * Math.abs(T);
                    $ += e.global_parameter_json[0].fields.vote_variable - Math.abs((S - E) * A)
                }
                for (d = 0; d < f[r].state_multipliers.length; d++)
                    if (f[r].state_multipliers[d].state == f[0].state_multipliers[a].state) var C = d;
                $ *= f[r].state_multipliers[C].state_multiplier, $ = Math.max($, 0), k.push({
                    candidate: i[r],
                    result: $
                })
            }
            y.push({
                state: f[0].state_multipliers[a].state,
                result: k
            })
        }
        for (a = 0; a < y.length; a++)
            for (r = 0; r < e.states_json.length; r++)
                if (y[a].state == e.states_json[r].pk) {
                    y[a].abbr = e.states_json[r].fields.abbr;
                    break
                } for (a = 0; a < y.length; a++) {
            var M = 0;
            for (r = 0; r < e.states_json.length; r++)
                if (e.states_json[r].pk == y[a].state) {
                    M = Math.floor(e.states_json[r].fields.popular_votes * (.95 + .1 * Math.random()));
                    break
                } var x = 0;
            for (r = 0; r < y[a].result.length; r++) x += y[a].result[r].result;
            for (r = 0; r < y[a].result.length; r++) {
                var N = y[a].result[r].result / x;
                y[a].result[r].percent = N, y[a].result[r].votes = Math.floor(N * M)
            }
        }
        for (a = 0; a < y.length; a++) {
            var I = R(y[a].state),
                O = 0;
            if (P(y[a].result, "percent"), y[a].result.reverse(), O = e.states_json[I].fields.electoral_votes, "1" == e.game_type_id)
                if (1 == e.states_json[I].fields.winner_take_all_flg)
                    for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = 0 == r ? O : 0;
                else {
                    O = e.states_json[I].fields.electoral_votes;
                    var H = 0;
                    for (r = 0; r < y[a].result.length; r++) H += y[a].result[r].votes;
                    var L = Math.ceil(y[a].result[0].votes / H * O * 1.25),
                        D = O - L;
                    for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = 0 == r ? L : 1 == r ? D : 0
                } if ("2" == e.game_type_id) {
                var V = [];
                for (r = 0; r < y[a].result.length; r++) V.push(y[a].result[r].percent);
                var q = divideElectoralVotesProp(V, O);
                for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = q[r]
            }
        }
        if (1 == t) return y;
        if (2 == t) {
            for (a = 0; a < y.length; a++) {
                for (r = 0; r < y[a].result.length; r++) {
                    var G = 1 + F() * e.global_parameter_json[0].fields.global_variance;
                    y[a].result[r].result *= G
                }
                for (M = 0, r = 0; r < e.states_json.length; r++)
                    if (e.states_json[r].pk == y[a].state) {
                        M = Math.floor(e.states_json[r].fields.popular_votes * (.95 + .1 * Math.random()));
                        break
                    } for (x = 0, r = 0; r < y[a].result.length; r++) x += y[a].result[r].result;
                for (r = 0; r < y[a].result.length; r++) {
                    N = y[a].result[r].result / x;
                    y[a].result[r].percent = N, y[a].result[r].votes = Math.floor(N * M)
                }
            }
            return y
        }
    }

    function S(t) {
        for (var i = -1, a = 0; a < e.election_json.length; a++)
            if (e.election_json[a].pk == t) {
                i = a;
                break
            } return i
    }

    function E(t) {
        for (var i = -1, a = 0; a < e.candidate_json.length; a++)
            if (e.candidate_json[a].pk == t) {
                i = a;
                break
            } return i
    }

    function R(t) {
        for (var i = -1, a = 0; a < e.states_json.length; a++)
            if (e.states_json[a].pk == t) {
                i = a;
                break
            } return i
    }

    function C(t) {
        var i = S(t),
            a = '    <div class="overlay" id="feedback_overlay"></div>    <div class="overlay_window" id="feedback_window">        <div class="overlay_window_content" id="feedback_content">        <h3>Advisor Feedback</h3>        <img src="' + e.election_json[i].fields.advisor_url + '" width="208" height="128"/>        <p>Please select an answer before continuing!</p>        </div>        <div id="visit_buttons">        <button id="ok_button">OK</button><br>        </div>    </div>';
        $("#game_window").append(a), $("#ok_button").click(function() {
            $("#feedback_overlay").remove(), $("#feedback_window").remove()
        })
    }

    function F() {
        var e, t, i;
        do {
            i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t
        } while (i >= 1 || 0 == i);
        return e * Math.sqrt(-2 * Math.log(i) / i)
    }

    function P(e, t) {
        return e.sort(function(e, i) {
            var a = e[t],
                s = i[t];
            return a < s ? -1 : a > s ? 1 : 0
        })
    }

    function M(e) {
        var t = e.toString().split(".");
        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
    }
    $("#game_start").click(function(a) {
        a.preventDefault(),
            function() {
                for (var a = "", n = 0; n < e.temp_election_list.length; n++) 0 == e.temp_election_list[n].is_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : 1 == e.show_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : a += "<option value=" + e.temp_election_list[n].id + " disabled>" + e.temp_election_list[n].display_year + "</option>";
                var l = '<div class="game_header">            <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_2">            <div id="election_year_form">            <form name="election_year">            <p>                <h3>Please select the election you will run in:</h3>    \t\t    <select name="election_id" id="election_id">' + a + '</select>            </p>            </form>            <div class="election_description_window" id="election_description_window">                <div id="election_image">                    <img src="' + e.election_json[0].fields.image_url + '" width="300" height="160"/>                </div>                <div id="election_summary">' + e.election_json[0].fields.summary + '</div>            </div>        </div>        <p><button id="election_id_button">Continue</button></p>';
                $("#game_window").html(l), $("#election_id").change(function() {
                    for (var t = -1, i = 0; i < e.election_json.length; i++)
                        if (e.election_json[i].pk == election_id.value) {
                            t = i;
                            break
                        } $("#election_description_window").html('<div id="election_image">            <img src="' + e.election_json[t].fields.image_url + '" width="300" height="160"/>            </div>            <div id="election_summary">' + e.election_json[t].fields.summary + "</div>")
                }), $("#election_id_button").click(function(a) {
                    a.preventDefault(),
                        function(a) {
                            for (var n = "", l = 0; l < e.candidate_json.length; l++) e.candidate_json[l].fields.election == a && 1 == e.candidate_json[l].fields.is_active && (n += "<option value=" + e.candidate_json[l].pk + ">" + e.candidate_json[l].fields.first_name + " " + e.candidate_json[l].fields.last_name + "</option>");
                            var o = '<div class="game_header">        <h2>THE CAMPAIGN TRAIL</h2>    </div>    <div class="inner_window_w_desc" id="inner_window_3">        <div id="candidate_form">        <form name="candidate">            <p>            <h3>Please select your candidate:</h3>            <select name="candidate_id" id="candidate_id">' + n + '</select>            </p>        </form>        </div>        <div class="person_description_window" id="candidate_description_window">        </div>        <p>            <button class="person_button" id="candidate_id_button">Continue</button>        </p>    </div>';
                            $("#game_window").html(o), $("#candidate_id").ready(function() {
                                t()
                            }), $("#candidate_id").change(function() {
                                t()
                            }), $("#candidate_id_button").click(function(t) {
                                t.preventDefault(),
                                    function(t, a) {
                                        for (var n = "", l = 0; l < e.running_mate_json.length; l++)
                                            if (e.running_mate_json[l].fields.candidate == a) {
                                                var o = e.running_mate_json[l].fields.running_mate,
                                                    _ = -1;
                                                for (j = 0; j < e.candidate_json.length; j++)
                                                    if (o == e.candidate_json[j].pk) {
                                                        _ = j;
                                                        break
                                                    } n += "<option value=" + e.candidate_json[_].pk + ">" + e.candidate_json[_].fields.first_name + " " + e.candidate_json[_].fields.last_name + "</option>"
                                            } var r = '        <div class="game_header">        <h2>THE CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_4">            <div id="running_mate_form">            <form name="running mate">            <p><h3>Please select your running mate:</h3>            <select name="running_mate_id" id="running_mate_id">' + n + '</select>            </p>            </form>            </div>            <div class="person_description_window" id="running_mate_description_window">            </div>        <p><button class="person_button" id="running_mate_id_button">Continue</button>        </p>        </div>';
                                        $("#game_window").html(r), $("#running_mate_id").ready(function() {
                                            i()
                                        }), $("#running_mate_id").change(function() {
                                            i()
                                        }), $("#running_mate_id_button").click(function(e) {
                                            e.preventDefault(), s(t, a, running_mate_id.value)
                                        })
                                    }(a, candidate_id.value)
                            })
                        }(election_id.value)
                })
            }()
    }), $("#skip_to_final").click(function(t) {
        e.final_state_results = A(1), d()
    })
}();
