import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Coins, CheckCircle2, Star, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tasks = () => {
  const navigate = useNavigate();

  const availableTasks = [
    {
      id: 1,
      title: "Complete Profile Setup",
      description: "Fill out your complete profile information including bio and preferences",
      coins: 50,
      duration: "5 minutes",
      difficulty: "Easy",
      category: "Profile",
      completed: false,
    },
    {
      id: 2,
      title: "Watch Tutorial Videos",
      description: "Watch all 3 onboarding tutorial videos to learn how ChronoPay works",
      coins: 100,
      duration: "15 minutes",
      difficulty: "Easy",
      category: "Learning",
      completed: false,
    },
    {
      id: 3,
      title: "Refer a Friend",
      description: "Invite a friend to join ChronoPay and earn bonus coins when they sign up",
      coins: 200,
      duration: "2 minutes",
      difficulty: "Medium",
      category: "Social",
      completed: false,
    },
    {
      id: 4,
      title: "Daily Check-in",
      description: "Check in daily for 7 consecutive days to earn your streak bonus",
      coins: 25,
      duration: "1 minute",
      difficulty: "Easy",
      category: "Daily",
      completed: true,
    },
    {
      id: 5,
      title: "Community Engagement",
      description: "Participate in community discussions and help other users",
      coins: 150,
      duration: "30 minutes",
      difficulty: "Medium",
      category: "Community",
      completed: false,
    },
    {
      id: 6,
      title: "Beta Feature Testing",
      description: "Test new beta features and provide detailed feedback",
      coins: 300,
      duration: "45 minutes",
      difficulty: "Hard",
      category: "Testing",
      completed: false,
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-900/30 text-green-300 border-green-600/40';
      case 'Medium': return 'bg-yellow-900/30 text-yellow-400 border-yellow-600/40';
      case 'Hard': return 'bg-red-900/30 text-red-500 border-red-600/40';
      default: return 'bg-gray-900/30 text-gray-300 border-gray-600/40';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Profile': return <Target size={16} />;
      case 'Learning': return <Star size={16} />;
      case 'Social': return <CheckCircle2 size={16} />;
      default: return <Clock size={16} />;
    }
  };

  
  return (
    <div className="min-h-screen bg-black">
      <SignedOut>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4 font-outfit">Access Denied</h1>
            <p className="text-gray-400 font-poppins mb-8">Please sign in to access your tasks</p>
            <SignInButton fallbackRedirectUrl="/tasks">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-poppins">
                Sign In
              </Button>
            </SignInButton>
          </div>
        </motion.div>
      </SignedOut>

      <SignedIn>
        <Header />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-black border-b border-gray-800 pt-20"
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => navigate('/dashboard')}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <ArrowLeft size={20} />
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 font-outfit">
                  Available <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tasks</span>
                </h1>
                <p className="text-xl text-gray-400 font-poppins">Complete tasks to earn ChronoCoins</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card 
                  className={`bg-gray-900/90 border ${
                    task.completed ? 'border-green-500/30' : 'border-gray-700/50'
                  } backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 text-gray-400">
                        {getCategoryIcon(task.category)}
                        <span className="text-sm font-poppins">{task.category}</span>
                      </div>
                      {task.completed && (
                        <CheckCircle2 size={20} className="text-green-400" />
                      )}
                    </div>
                    <CardTitle className="text-white font-outfit text-xl group-hover:text-purple-300 transition-colors">
                      {task.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 font-poppins">
                      {task.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Coins size={18} className="text-yellow-400" />
                        <span className="text-yellow-400 font-bold font-poppins">{task.coins} coins</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Clock size={14} />
                        <span className="font-poppins">{task.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`${getDifficultyColor(task.difficulty)} font-poppins text-xs`}
                      >
                        {task.difficulty}
                      </Badge>
                      
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          disabled={task.completed}
                          className={`font-poppins ${
                            task.completed 
                              ? 'bg-green-600/20 text-green-400 cursor-not-allowed' 
                              : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700'
                          }`}
                        >
                          {task.completed ? 'Completed' : 'Start Task'}
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 font-poppins mb-4">More tasks coming soon!</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigate('/dashboard')}
                variant="outline"
                className="border-gray-600 text-white bg-transparent hover:bg-white/10 font-poppins"
              >
                Back to Dashboard
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </SignedIn>
    </div>
  );
};

export default Tasks;
