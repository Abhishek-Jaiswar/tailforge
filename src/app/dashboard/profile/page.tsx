import React from "react";
import {
  UserCircle,
  Settings,
  Trophy,
  Clock,
  Mail,
  Calendar,
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-white tracking-tight">
            Profile Settings
          </h1>
          <p className="text-neutral-400 mt-1">
            Manage your account settings and preferences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-neutral-700 flex items-center justify-center">
                <UserCircle className="w-16 h-16 text-neutral-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-display font-semibold text-white mb-2">
                  John Doe
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Mail className="w-4 h-4" />
                    <span>john.doe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Calendar className="w-4 h-4" />
                    <span>Joined January 2024</span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-amber-400 text-neutral-900 rounded-lg font-medium hover:bg-amber-300 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    Achievements
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Your accomplishments
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Challenges Completed</span>
                  <span className="text-white font-medium">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Current Streak</span>
                  <span className="text-white font-medium">7 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Skill Level</span>
                  <span className="text-white font-medium">Advanced</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    Activity
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Your recent activity
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Last Active</span>
                  <span className="text-white font-medium">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Time Spent</span>
                  <span className="text-white font-medium">48h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Weekly Goal</span>
                  <span className="text-white font-medium">4/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Settings */}
        <div className="space-y-6">
          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-white">
                  Settings
                </h3>
                <p className="text-sm text-neutral-400">Account preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Dark Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Weekly Reports</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
            <h3 className="text-lg font-display font-semibold text-white mb-4">
              Danger Zone
            </h3>
            <button className="w-full px-4 py-2 bg-red-500/10 text-red-400 rounded-lg font-medium hover:bg-red-500/20 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
