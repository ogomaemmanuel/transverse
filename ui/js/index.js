/**
 * Copyright (C) 2018 Preetam Jinka
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

var m = require("mithril")
var PrimaryNav = require("./primary-nav")
var GoalsListPage = require("./goals_list_page")
var GoalDetailsPage = require("./goal_details_page")
var GoalSettingsPage = require("./goal_settings_page")
var GoalAddPage = require("./goal_add_page")
var Profile = require("./profile")

m.mount(document.querySelector("#primaryNav"), PrimaryNav);

m.route(document.getElementById("app"), "/goals", {
  "/goals": GoalsListPage,
  "/create-goal": GoalAddPage,
  "/goals/:id": GoalDetailsPage,
  "/goals/:id/settings": GoalSettingsPage,
  "/profile": Profile.ProfilePage
})
