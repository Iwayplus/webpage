import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Paper,
} from '@mui/material';

const baseUrl = process.env.NODE_ENV === "development" ? 'http://localhost:8000' : 'https://dev.iwayplus.in';
const apiClient = axios.create({ baseURL: baseUrl });

const Quote = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    coreFunctionality: '',
    timeline: '',
    service: '',
    area: '',
    source: '',
  });

  const [otherAnswers, setOtherAnswers] = useState({
    coreFunctionality: '',
    timeline: '',
    source: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleRadioChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleOtherAnswerChange = (e, field) => {
    setOtherAnswers({ ...otherAnswers, [field]: e.target.value });
  };

  const isFormComplete = Object.values(formState).every(value => value !== '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const response = await apiClient.post('/webapi/quote', {
        ...formState,
        coreFunctionality: formState.coreFunctionality === 'Others' ? otherAnswers.coreFunctionality : formState.coreFunctionality,
        timeline: formState.timeline === 'Others' ? otherAnswers.timeline : formState.timeline,
        source: formState.source === 'Others' ? otherAnswers.source : formState.source,
      });

      setDialogOpen(true);

      setFormState({
        name: '',
        phone: '',
        email: '',
        organization: '',
        coreFunctionality: '',
        timeline: '',
        service: '',
        area: '',
        source: '',
      });

      setOtherAnswers({ coreFunctionality: '', timeline: '', source: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <Box sx={{ mt: 8, px: { xs: 2, md: 6 }, mb: 10 }}>
      <Typography variant="h4" fontWeight={700} color="error" gutterBottom textAlign="center">
        Get a Quote
      </Typography>

      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <form>
          <Grid container spacing={3}>
            {/* Row 1 */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name *"
                value={formState.name}
                onChange={(e) => handleInputChange(e, 'name')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number *"
                value={formState.phone}
                onChange={(e) => handleInputChange(e, 'phone')}
              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email *"
                value={formState.email}
                onChange={(e) => handleInputChange(e, 'email')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Organization *"
                value={formState.organization}
                onChange={(e) => handleInputChange(e, 'organization')}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Core Functionality */}
          <Typography fontWeight={600}>What type of indoor facility do you have? *</Typography>
          <RadioGroup
            value={formState.coreFunctionality}
            onChange={(e) => handleRadioChange(e, 'coreFunctionality')}
          >
            {[
              "Healthcare Facility",
              "Metro/Railways Stations",
              "Academic Building/College/School",
              "Recreational Space/Museum",
              "Shopping Complex",
              "Sports Arena",
              "Government Offices/Public Building/IT Parks",
              "Others",
            ].map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          {formState.coreFunctionality === "Others" && (
            <TextField
              fullWidth
              margin="normal"
              label="Please specify"
              value={otherAnswers.coreFunctionality}
              onChange={(e) => handleOtherAnswerChange(e, 'coreFunctionality')}
            />
          )}

          <Divider sx={{ my: 4 }} />

          {/* Timeline */}
          <Typography fontWeight={600}>Expected Timeline *</Typography>
          <RadioGroup
            value={formState.timeline}
            onChange={(e) => handleRadioChange(e, 'timeline')}
          >
            {[
              "Within 2 weeks",
              "2 to 4 weeks",
              "1 to 3 months",
              "3 to 6 months",
              "Others",
            ].map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          {formState.timeline === "Others" && (
            <TextField
              fullWidth
              margin="normal"
              label="Specify in weeks"
              type="number"
              value={otherAnswers.timeline}
              onChange={(e) => handleOtherAnswerChange(e, 'timeline')}
            />
          )}

          <Divider sx={{ my: 4 }} />

          {/* Service */}
          <Typography fontWeight={600}>Service Required *</Typography>
          <RadioGroup
            value={formState.service}
            onChange={(e) => handleRadioChange(e, 'service')}
          >
            {[
              "Interactive Indoor Maps and Navigation",
              "Interactive Maps with Real-time Navigation",
              "Other Map Based Application",
              "Accessibility Focused Indoor Navigation",
            ].map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>

          <Divider sx={{ my: 4 }} />

          {/* Area */}
          <Typography fontWeight={600}>Total Indoor Area *</Typography>
          <RadioGroup
            value={formState.area}
            onChange={(e) => handleRadioChange(e, 'area')}
          >
            {[
              "Less than 5,000 Sq. meter",
              "5,000 to 10,000 Sq. meters",
              "10,000 to 25,000 Sq. meters",
              "More than 25,000 Sq. meters",
            ].map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>

          <Divider sx={{ my: 4 }} />

          {/* Source */}
          <Typography fontWeight={600}>How did you hear about us? *</Typography>
          <RadioGroup
            value={formState.source}
            onChange={(e) => handleRadioChange(e, 'source')}
          >
            {[
              "Internet",
              "Our website",
              "Social network",
              "Personal contacts",
              "Others",
            ].map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          {formState.source === "Others" && (
            <TextField
              fullWidth
              margin="normal"
              label="Please specify"
              value={otherAnswers.source}
              onChange={(e) => handleOtherAnswerChange(e, 'source')}
            />
          )}

          <Divider sx={{ my: 4 }} />

          {/* Submit */}
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="error"
              size="large"
              disabled={!isFormComplete}
              onClick={handleSubmit}
            >
              Submit Quote
            </Button>
          </Box>
        </form>
      </Paper>

      {/* Dialog */}
    <Dialog
  open={dialogOpen}
  onClose={() => setDialogOpen(false)}
  maxWidth="xs"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: 3,
      p: 2,
      textAlign: 'center',
    },
  }}
>
  <DialogTitle sx={{ p: 0 }}>
    <Box display="flex" justifyContent="center" mt={2}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
        alt="Success"
        width={64}
        height={64}
      />
    </Box>
  </DialogTitle>

  <DialogContent>
    <Typography variant="h6" fontWeight={700} color="success.main" mt={2}>
      Quote Request Submitted!
    </Typography>
    <Typography variant="body1" sx={{ mt: 1.5, px: 2 }}>
      Thank you for your interest. Our team will reach out to you shortly to discuss your requirements.
    </Typography>
  </DialogContent>

  <DialogActions sx={{ justifyContent: 'center', mb: 1 }}>
    <Button
      variant="contained"
      onClick={() => setDialogOpen(false)}
      color="success"
      sx={{ px: 4, fontWeight: 600 }}
    >
      Close
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default Quote;
